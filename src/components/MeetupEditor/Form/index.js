import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Button,
    Chip,
    CircularProgress,
    FormControl,
    Grid,
    Input,
    InputLabel,
    MenuItem,
    Select,
    TextareaAutosize,
    TextField,
    Typography
} from '@material-ui/core';
import {map} from 'lodash';

import Forecast from './Forecast';
import {
    getBeerBoxes, getForecast, isSaveButtonDisabled, userPropTypes
} from '../../../util';
import {handleChangeAnswerMeetup} from '../../../actions/meetup';
import {requestFetchUsers} from '../../../actions/user';
import roles from '../../../static/roles';

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 224,
            width: 250
        }
    }
};

const Form = ({
    forecast, meetup, users, onChangeAnswer, onMount, onSubmit, role
}) => {
    const handleChangeAnswer = ({target: {name, value}}) => onChangeAnswer({[name]: value});
    const handleChangeBeer = ({target: {name, value}}) => {
        onChangeAnswer({[name]: value});
        onChangeAnswer({boxes: value !== '' ? getBeerBoxes(value) : 0});
    };

    useEffect(() => {
        onMount();
    }, [onMount]);

    return forecast ? (
        <Grid container spacing={3} className="meetup-from">
            <Grid item sm={12}>
                <TextField
                    id="title"
                    name="title"
                    label="Title"
                    value={meetup.title || ''}
                    onChange={handleChangeAnswer}
                    fullWidth
                    required
                    disabled={role === roles.USER}
                />
            </Grid>
            <Grid item sm={12}>
                <TextareaAutosize
                    name="description"
                    placeholder="Description"
                    value={meetup.description || ''}
                    onChange={handleChangeAnswer}
                    className="text-area"
                    disabled={role === roles.USER}
                />
            </Grid>
            <Grid item sm={12}>
                <FormControl className="select-multiple">
                    <InputLabel id="participants-label">Participants</InputLabel>
                    <Select
                        labelId="participants-label"
                        id="participants"
                        name="participants"
                        label="Participants"
                        fullWidth
                        value={meetup.participants || []}
                        onChange={handleChangeAnswer}
                        required
                        multiple
                        input={<Input id="select-multiple-chip"/>}
                        renderValue={selectedUsers => (
                            <div className="chips">
                                {map(selectedUsers, user => (
                                    <Chip key={user._id} label={`${user.name} (${user.username})`} className="chip"/>
                                ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                        disabled={role === roles.USER}
                    >
                        {map(users, user => (
                            <MenuItem key={user._id} value={user}>
                                {`${user.name} (${user.username})`}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item sm={12}>
                <TextField
                    id="place"
                    name="place"
                    label="Place"
                    value={meetup.place || ''}
                    onChange={handleChangeAnswer}
                    fullWidth
                    required
                    disabled={role === roles.USER}

                />
            </Grid>
            <Grid item sm={6}>
                <FormControl className="select-multiple">
                    <InputLabel>
                        Date
                    </InputLabel>
                    <Select
                        id="date"
                        name="date"
                        value={meetup.date || ''}
                        onChange={handleChangeAnswer}
                        required
                        disabled={role === roles.USER}
                    >
                        {map(forecast.dates, date => (
                            <MenuItem key={date} value={date}>
                                {date}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item sm={6}>
                <TextField
                    id="time"
                    name="time"
                    label="Time"
                    type="time"
                    value={meetup.time || ''}
                    InputLabelProps={{
                        shrink: true
                    }}
                    onChange={handleChangeAnswer}
                    fullWidth
                    required
                    disabled={!meetup.date || role === roles.USER}
                />
            </Grid>
            <Grid item sm={6}>
                <TextField
                    id="beers"
                    name="beers"
                    label="Beers"
                    value={meetup.beers || ''}
                    onChange={handleChangeBeer}
                    fullWidth
                    required
                    disabled={!meetup.time || role === roles.USER}
                />
            </Grid>
            <Grid item sm={6}>
                {meetup.time && meetup.participants ? (
                    <Forecast
                        forecast={getForecast(forecast, meetup)}
                        participants={meetup.participants.length}
                        role={role}
                    />
                ) : (
                    <Typography component="h6" color="error" gutterBottom>
                        Please select participants, date and time. (For display forecast and optimal beer quantity)
                    </Typography>
                )}
            </Grid>
            {role === roles.ADMIN && (
                <Grid item container sm={12} justify="flex-end">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onSubmit}
                        disabled={isSaveButtonDisabled(meetup)}
                    >
                        Save
                    </Button>
                </Grid>

            )}
        </Grid>
    ) : (
        <CircularProgress/>
    );
};

Form.propTypes = {
    onChangeAnswer: PropTypes.func.isRequired,
    onMount: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    role: PropTypes.string.isRequired,
    forecast: PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.object),
        dates: PropTypes.arrayOf(PropTypes.string)
    }),
    meetup: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        place: PropTypes.string,
        date: PropTypes.string,
        time: PropTypes.string,
        participants: PropTypes.arrayOf(userPropTypes),
        beers: PropTypes.oneOfType([
            PropTypes.string, PropTypes.number
        ])
    }),
    users: PropTypes.arrayOf(userPropTypes)
};

Form.defaultProps = {
    forecast: [],
    meetup: {},
    users: []
};

export default connect(
    state => ({
        forecast: state.weather.forecast,
        meetup: state.meetup.meetup,
        users: state.user.users,
        role: state.user.details.role.value
    }),
    {
        onChangeAnswer: handleChangeAnswerMeetup,
        onMount: requestFetchUsers
    }
)(Form);
