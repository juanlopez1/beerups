import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Button, Container, Grid, TextField
} from '@material-ui/core';

import useStyles from './styles';
import {
    handleChangeSearcherDate, requestFetchMeetups
} from '../../../actions/meetup';

const Searcher = ({
    date, handleChangeDate, onSubmit
}) => {
    const styles = useStyles();
    return (
        <Grid container justify="space-around">
            <TextField
                id="date"
                className={styles.textField}
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
};

Searcher.propTypes = {
    handleChangeTime: PropTypes.func.isRequired,
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
