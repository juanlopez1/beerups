import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {CircularProgress} from '@material-ui/core';
import {isEmpty} from 'lodash';

import Searcher from './Searcher';
import {
    InfoMessage, PaperCard, RouteContainer, ServiceUnavailable, Table, Title
} from '../common';
import {requestCheckInMeetup, requestParticipateInMeetup, resetMeetupsReducer} from '../../actions/meetup';

const renderMeetupList = (userId, meetups, fetching, error, handleAddToMeetup, handleCheckIn, handleShowMeetup) => {
    if (fetching) {
        return <CircularProgress/>;
    }
    if (error) {
        return <ServiceUnavailable/>;
    }
    return isEmpty(meetups) ? (
        <InfoMessage text="Not found any meetup"/>
    ) : (
        <Table
            userId={userId}
            meetups={meetups}
            onAddToMeetup={handleAddToMeetup}
            onCheckIn={handleCheckIn}
            onShowMeetup={handleShowMeetup}
        />
    );
};

const Calendar = ({
    error, fetching, history, meetups, onMount, userId, onAddToMeetup, onCheckIn
}) => {
    const handleShowMeetup = id => history.push(`meetup/${id}`);

    useEffect(() => {
        onMount();
    }, [onMount]);

    return (
        <RouteContainer>
            <PaperCard>
                <Title>Search meetups</Title>
                <Searcher onCreateMeetup={() => history.push('meetup')}/>
                {renderMeetupList(userId, meetups, fetching, error, onAddToMeetup, onCheckIn, handleShowMeetup)}
            </PaperCard>
        </RouteContainer>
    );
};

Calendar.propTypes = {
    onAddToMeetup: PropTypes.func.isRequired,
    onCheckIn: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired,
    onMount: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
    error: PropTypes.bool,
    fetching: PropTypes.bool,
    meetups: PropTypes.arrayOf(PropTypes.object)
};

Calendar.defaultProps = {
    error: false,
    fetching: false,
    meetups: []
};

export default connect(
    state => ({
        userId: state.user.details._id,
        error: state.meetup.error,
        fetching: state.meetup.fetching,
        meetups: state.meetup.meetups
    }),
    {
        onAddToMeetup: requestParticipateInMeetup,
        onCheckIn: requestCheckInMeetup,
        onMount: resetMeetupsReducer
    }
)(Calendar);
