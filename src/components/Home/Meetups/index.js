import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {
    CircularProgress
} from '@material-ui/core';
import {isEmpty} from 'lodash';

import Table from './Table';
import {
    InfoMessage, ServiceUnavailable, Title
} from '../../common';

const Meetups = () => {
    const meetups = useSelector(state => state.meetup.meetups);
    const fetching = useSelector(state => state.meetup.fetching);
    const error = useSelector(state => state.meetup.error);

    if (fetching) {
        return <CircularProgress/>;
    }
    if (error) {
        return <ServiceUnavailable/>;
    }
    return (
        <Fragment>
            <Title text="Your meetups"/>
            {isEmpty(meetups) ? <InfoMessage text="No meetups"/> : <Table meetups={meetups}/>}
        </Fragment>
    );
};

export default Meetups;
