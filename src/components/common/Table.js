import React from 'react';
import PropTypes from 'prop-types';
import {
    Fab, Paper, Table as TableComponent, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@material-ui/core';
import {Visibility} from '@material-ui/icons';
import {map} from 'lodash';

const Table = ({meetups, onShowMeetup}) => (
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
                            <Fab size="small" onClick={() => onShowMeetup(meetup._id)}>
                                <Visibility/>
                            </Fab>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </TableComponent>
    </TableContainer>
);

Table.propTypes = {
    onShowMeetup: PropTypes.func.isRequired,
    meetups: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        place: PropTypes.string,
        date: PropTypes.string,
        time: PropTypes.string
    })).isRequired
};

export default Table;
