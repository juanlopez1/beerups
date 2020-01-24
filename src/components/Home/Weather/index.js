import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {
    CircularProgress
} from '@material-ui/core';

import {ServiceUnavailable, Title} from '../../common';

const Weather = () => {
    const weather = useSelector(state => state.weather.weather);
    const fetching = useSelector(state => state.weather.fetching);
    const error = useSelector(state => state.weather.error);

    if (fetching || !weather) {
        return <CircularProgress/>;
    }
    if (error) {
        return <ServiceUnavailable/>;
    }
    return (
        <Fragment>
            <Title text={`Weather in ${weather.name}, ${weather.sys.country}`}/>
        </Fragment>
    );
};

export default Weather;
