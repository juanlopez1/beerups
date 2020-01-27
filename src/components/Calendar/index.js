import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {CircularProgress, Container} from '@material-ui/core';
import {isEmpty} from 'lodash';

import Searcher from './Searcher';
import {
    InfoMessage, ServiceUnavailable, Table, Title
} from '../common';
import {cleanStoredMeetups} from '../../actions/meetup';

const renderMeetupList = (meetups, fetching, error) => {
    if (fetching) {
        return <CircularProgress/>;
    }
    if (error) {
        return <ServiceUnavailable/>;
    }
    return isEmpty(meetups) ? <InfoMessage text="Not found any meetup"/> : <Table meetups={meetups}/>;
};

const Calendar = ({
    error, fetching, meetups, onMount
}) => {
    useEffect(() => {
        onMount();
    }, [onMount]);

    return (
        <Container maxWidth="lg" className="route-container">
            <Title text="Search meetups"/>
            <Searcher/>
            {renderMeetupList(meetups, fetching, error)}
        </Container>
    );
};

Calendar.propTypes = {
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
    {onMount: cleanStoredMeetups}
)(Calendar);
