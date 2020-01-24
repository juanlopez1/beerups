import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect, useSelector} from 'react-redux';
import {CircularProgress, Container} from '@material-ui/core';
import {isEmpty} from 'lodash';

import Searcher from './Searcher';
import useStyles from './styles';
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

const Calendar = ({onMount}) => {
    const styles = useStyles();
    const meetups = useSelector(state => state.meetup.meetups);
    const fetching = useSelector(state => state.meetup.fetching);
    const error = useSelector(state => state.meetup.error);

    useEffect(() => {
        onMount();
    }, [onMount]);

    return (
        <Container maxWidth="lg" className={styles.container}>
            <Title text="Search meetups"/>
            <Searcher/>
            {renderMeetupList(meetups, fetching, error)}
        </Container>
    );
};

Calendar.propTypes = {
    onMount: PropTypes.func.isRequired
};

export default connect(
    null,
    {onMount: cleanStoredMeetups}
)(Calendar);
