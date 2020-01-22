import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {
    CircularProgress, Typography
} from '@material-ui/core';

const Weather = () => {
    const weather = useSelector(state => state.weather.weather);
    return weather ? (
        <Fragment>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                {`Weather in ${weather.name}, ${weather.sys.country}`}
            </Typography>
        </Fragment>
    ) : (
        <CircularProgress/>
    );
};

export default Weather;
