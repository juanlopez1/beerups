import React from 'react';
import PropTypes from 'prop-types';
import {
    Paper, Table as TableComponent, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@material-ui/core';
import {map} from 'lodash';

const Table = ({meetups}) => (
    <TableContainer component={Paper}>
        <TableComponent aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align="right">Title</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">Place</TableCell>
                    <TableCell align="right">Date</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {map(meetups, meetup => (
                    <TableRow key={meetup._id}>
                        <TableCell component="th" scope="row">
                            {meetup.details.title}
                        </TableCell>
                        <TableCell align="right">{meetup.details.description}</TableCell>
                        <TableCell align="right">{meetup.details.place}</TableCell>
                        <TableCell align="right">{meetup.details.date}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </TableComponent>
    </TableContainer>
);

Table.propTypes = {
    meetups: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        details: PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            place: PropTypes.string,
            date: PropTypes.string
        })
    })).isRequired
};

export default Table;
