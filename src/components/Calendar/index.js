import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {CircularProgress} from '@material-ui/core';
import {isEmpty} from 'lodash';

import Searcher from './Searcher';
import {
    InfoMessage, PaperCard, RouteContainer, ServiceUnavailable, Table, Title
} from '../common';
import {resetMeetupsReducer} from '../../actions/meetup';

const renderMeetupList = (meetups, fetching, error, handleShowMeetup) => {
    if (fetching) {
        return <CircularProgress/>;
    }
    if (error) {
        return <ServiceUnavailable/>;
    }
    return isEmpty(meetups) ? (
        <InfoMessage text="Not found any meetup"/>
    ) : (
        <Table meetups={meetups} onShowMeetup={handleShowMeetup}/>
    );
};

const Calendar = ({
    error, fetching, history, meetups, onMount
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
                {renderMeetupList(meetups, fetching, error, handleShowMeetup)}
            </PaperCard>
        </RouteContainer>
    );
};

Calendar.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired,
    onMount: PropTypes.func.isRequired,
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
        error: state.meetup.error,
        fetching: state.meetup.fetching,
        meetups: state.meetup.meetups
    }),
    {onMount: resetMeetupsReducer}
)(Calendar);
