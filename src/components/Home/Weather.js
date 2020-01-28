import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    CircularProgress, Table as TableComponent, TableBody, TableCell, TableHead, TableRow
} from '@material-ui/core';

import {ServiceUnavailable, Title} from '../common';

const Weather = ({error, fetching, weather}) => {
    if (fetching || !weather) {
        return <CircularProgress/>;
    }
    if (error) {
        return <ServiceUnavailable/>;
    }
    return (
        <Fragment>
            <Title>{`Weather in ${weather.name}, ${weather.country}`}</Title>
            <div className="weather">
                <div className="temperature">
                    <img alt="icon" src={weather.details.icon}/>
                    <div className="temp">
                        {`${weather.details.temp} °C`}
                    </div>
                </div>
                <div className="description">
                    {weather.details.description}
                </div>
                <TableComponent className="">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Feels Like</TableCell>
                            <TableCell align="center">Min.</TableCell>
                            <TableCell align="center">Max.</TableCell>
                            <TableCell align="center">Pressure</TableCell>
                            <TableCell align="center">Humidity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row" align="center">
                                {`${weather.details.feelsLike} °C`}
                            </TableCell>
                            <TableCell align="center">
                                {`${weather.details.min} °C`}
                            </TableCell>
                            <TableCell align="center">
                                {`${weather.details.max} °C`}
                            </TableCell>
                            <TableCell align="center">
                                {`${weather.details.pressure} hpa`}
                            </TableCell>
                            <TableCell align="center">
                                {weather.details.humidity}
                                %
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </TableComponent>
            </div>
        </Fragment>
    );
};

Weather.propTypes = {
    error: PropTypes.bool,
    fetching: PropTypes.bool,
    weather: PropTypes.shape({
        name: PropTypes.string,
        country: PropTypes.string,
        details: PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            icon: PropTypes.string,
            temp: PropTypes.number,
            feelsLike: PropTypes.number,
            min: PropTypes.number,
            max: PropTypes.number,
            pressure: PropTypes.number,
            humidity: PropTypes.number
        })
    })
};

Weather.defaultProps = {
    error: false,
    fetching: false,
    weather: {}
};

export default connect(
    state => ({
        error: state.weather.error,
        fetching: state.weather.fetching,
        weather: state.weather.weather
    })
)(Weather);
