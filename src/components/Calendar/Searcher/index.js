import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Button, Grid, TextField
} from '@material-ui/core';

import {
    handleChangeSearcherDate, requestFetchMeetups
} from '../../../actions/meetup';

const Searcher = ({
    date, handleChangeDate, onSubmit
}) => (
    <Grid container justify="space-around">
        <TextField
            id="date"
            className="searcher-text-input"
            label="Date"
            type="date"
            value={date}
            InputLabelProps={{
                shrink: true
            }}
            onChange={event => handleChangeDate(event.target.value)}
        />
        <Button
            variant="contained"
            color="primary"
            onClick={onSubmit}
            disabled={!date}
        >
            Search
        </Button>
        <Button
            variant="contained"
            color="secondary"
            onClick={onSubmit}
        >
            Create Meetup
        </Button>
    </Grid>
);

Searcher.propTypes = {
    handleChangeDate: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    date: PropTypes.string
};

Searcher.defaultProps = {
    date: ''
};

export default connect(
    state => ({
        date: state.meetup.searcher.date
    }),
    {
        handleChangeDate: handleChangeSearcherDate,
        onSubmit: requestFetchMeetups
    }
)(Searcher);
