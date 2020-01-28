import React from 'react';
import PropTypes from 'prop-types';
import {
    Fab, Grid, Paper, Table as TableComponent, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@material-ui/core';
import {Add, Check, Visibility} from '@material-ui/icons';
import {includes, map} from 'lodash';

const Table = ({
    meetups, onAddToMeetup, onCheckIn, onShowMeetup, userId
}) => (
    <TableContainer component={Paper}>
        <TableComponent>
            <TableHead>
                <TableRow>
                    <TableCell align="center">Title</TableCell>
                    <TableCell align="center">Description</TableCell>
                    <TableCell align="center">Place</TableCell>
                    <TableCell align="center">Date/Time</TableCell>
                    <TableCell align="center">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {map(meetups, meetup => (
                    <TableRow key={meetup._id}>
                        <TableCell component="th" scope="row" align="center">
                            {meetup.title}
                        </TableCell>
                        <TableCell align="left">
                            {meetup.description}
                        </TableCell>
                        <TableCell align="center">
                            {meetup.place}
                        </TableCell>
                        <TableCell align="center">
                            {meetup.date}
                            &nbsp;
                            {meetup.time}
                        </TableCell>
                        <TableCell align="center">
                            <Grid container justify="space-between">
                                <Fab size="small" onClick={() => onShowMeetup(meetup._id)}>
                                    <Visibility/>
                                </Fab>
                                {!includes(meetup.participants, userId) && userId !== meetup.creator && (
                                    <Fab size="small" color="primary" onClick={() => onAddToMeetup(meetup._id)}>
                                        <Add/>
                                    </Fab>
                                )}
                                {includes(meetup.participants, userId) && !includes(meetup.checkedIn, userId) && (
                                    <Fab size="small" color="secondary" onClick={() => onCheckIn(meetup._id)}>
                                        <Check/>
                                    </Fab>
                                )}
                            </Grid>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </TableComponent>
    </TableContainer>
);

Table.propTypes = {
    onShowMeetup: PropTypes.func.isRequired,
    onAddToMeetup: PropTypes.func.isRequired,
    onCheckIn: PropTypes.func.isRequired,
    meetups: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        place: PropTypes.string,
        date: PropTypes.string,
        time: PropTypes.string,
        creator: PropTypes.string,
        participants: PropTypes.arrayOf(PropTypes.string),
        checkedIn: PropTypes.arrayOf(PropTypes.string)
    })).isRequired,
    userId: PropTypes.string.isRequired
};

export default Table;
