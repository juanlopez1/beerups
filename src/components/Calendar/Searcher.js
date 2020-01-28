import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Button, Grid, TextField
} from '@material-ui/core';

import {
    handleChangeSearcherDate, requestFetchMeetups
} from '../../actions/meetup';
import roles from '../../static/roles';

const Searcher = ({
    date, minDate, onChangeDate, onCreateMeetup, onSearch, role
}) => (
    <Grid container justify="space-between" className="searcher">
        <TextField
            id="date"
            className="searcher-text-input"
            label="Date"
            type="date"
            value={date}
            inputProps={{
                min: minDate
            }}
            InputLabelProps={{
                shrink: true
            }}
            onChange={event => onChangeDate(event.target.value)}
        />
        <Button
            variant="contained"
            color="primary"
            onClick={onSearch}
            disabled={!date}
        >
                Search
        </Button>
        {role === roles.ADMIN && (
            <Button
                variant="contained"
                color="secondary"
                onClick={onCreateMeetup}
            >
                    Create Meetup
            </Button>
        )}
    </Grid>
);

Searcher.propTypes = {
    onChangeDate: PropTypes.func.isRequired,
    onCreateMeetup: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    role: PropTypes.string.isRequired,
    date: PropTypes.string,
    minDate: PropTypes.string.isRequired
};

Searcher.defaultProps = {
    date: ''
};

export default connect(
    state => ({
        minDate: state.meetup.searcher.min,
        date: state.meetup.searcher.date,
        role: state.user.details.role.value
    }),
    {
        onChangeDate: handleChangeSearcherDate,
        onSearch: requestFetchMeetups
    }
)(Searcher);
