import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {
    CircularProgress
} from '@material-ui/core';
import {isEmpty} from 'lodash';

import {
    InfoMessage, ServiceUnavailable, Table, Title
} from '../common';
import {requestCheckInMeetup, requestParticipateInMeetup} from '../../actions/meetup';

const Meetups = ({
    error, fetching, history, meetups, onAddToMeetup, onCheckIn, userId
}) => {
    if (fetching) {
        return <CircularProgress/>;
    }
    if (error) {
        return <ServiceUnavailable/>;
    }
    return (
        <Fragment>
            <Title>Your meetups</Title>
            {isEmpty(meetups) ? (
                <InfoMessage text="No meetups"/>
            ) : (
                <Table
                    userId={userId}
                    meetups={meetups}
                    onAddToMeetup={onAddToMeetup}
                    onCheckIn={onCheckIn}
                    onShowMeetup={id => history.push(`meetup/${id}`)}
                />
            )}
        </Fragment>
    );
};

Meetups.propTypes = {
    onAddToMeetup: PropTypes.func.isRequired,
    onCheckIn: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired,
    userId: PropTypes.string.isRequired,
    error: PropTypes.bool,
    fetching: PropTypes.bool,
    meetups: PropTypes.arrayOf(PropTypes.object)
};

Meetups.defaultProps = {
    error: false,
    fetching: false,
    meetups: []
};

export default withRouter(
    connect(
        state => ({
            userId: state.user.details._id,
            error: state.meetup.error,
            fetching: state.meetup.fetching,
            meetups: state.meetup.meetups
        }),
        {
            onAddToMeetup: requestParticipateInMeetup,
            onCheckIn: requestCheckInMeetup
        }
    )(Meetups)
);
