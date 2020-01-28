import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    CircularProgress
} from '@material-ui/core';
import {isEmpty} from 'lodash';

import {
    InfoMessage, ServiceUnavailable, Table, Title
} from '../common';

const Meetups = ({error, fetching, meetups}) => {
    if (fetching) {
        return <CircularProgress/>;
    }
    if (error) {
        return <ServiceUnavailable/>;
    }
    return (
        <Fragment>
            <Title>Your meetups</Title>
            {isEmpty(meetups) ? <InfoMessage text="No meetups"/> : <Table meetups={meetups}/>}
        </Fragment>
    );
};

Meetups.propTypes = {
    error: PropTypes.bool,
    fetching: PropTypes.bool,
    meetups: PropTypes.arrayOf(PropTypes.object)
};

Meetups.defaultProps = {
    error: false,
    fetching: false,
    meetups: []
};

export default connect(
    state => ({
        error: state.meetup.error,
        fetching: state.meetup.fetching,
        meetups: state.meetup.meetups
    })
)(Meetups);
