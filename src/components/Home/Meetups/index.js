import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {
    CircularProgress, Typography
} from '@material-ui/core';
import {isEmpty} from 'lodash';

const renderMeetups = (meetups, fetching) => {
    if (fetching) {
        return <CircularProgress/>;
    }
    if (isEmpty(meetups)) {
        return 'No meetups';
    }
    return (
        <div>
            have meetups
        </div>
    );
};

const Meetups = () => {
    const meetups = useSelector(state => state.meetup.meetups);
    const fetching = useSelector(state => state.meetup.fetching);
    return (
        <Fragment>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Next meetups
            </Typography>
            {renderMeetups(meetups, fetching)}
        </Fragment>
    );
};

export default Meetups;
