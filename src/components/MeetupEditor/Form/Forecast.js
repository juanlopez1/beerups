import React from 'react';
import PropTypes from 'prop-types';
import {Typography} from '@material-ui/core';

import {PaperCard} from '../../common';
import {calculateOptimalBeerQuantity} from '../../../util';

const Forecast = ({forecast, participants}) => {
    const beersQuantity = calculateOptimalBeerQuantity(participants, forecast.temp);
    const feelsLikeBeersQuantity = calculateOptimalBeerQuantity(participants, forecast.feelsLike);
    return (
        <PaperCard>
            <Typography component="h4" color="primary">
                Forecast
            </Typography>
            <div className="forecast">
                <div className="temp">
                    {forecast.temp}
                    &nbsp;°C
                </div>
                <p className="temp-description">
                    We recommend you to order&nbsp;
                    {beersQuantity.beers}
                    &nbsp;beers (
                    {beersQuantity.boxes}
                    &nbsp;boxes)
                </p>
                <div className="feels-like">
                    {forecast.feelsLike}
                    &nbsp;°C
                    (feels like)
                </div>
                <p className="feels-like-description">
                    We recommend you to order&nbsp;
                    {feelsLikeBeersQuantity.beers}
                    &nbsp;beers (
                    {feelsLikeBeersQuantity.boxes}
                    &nbsp;boxes)
                </p>
            </div>
        </PaperCard>
    );
};

Forecast.propTypes = {
    forecast: PropTypes.shape({
        temp: PropTypes.number,
        feelsLike: PropTypes.number
    }).isRequired,
    participants: PropTypes.number.isRequired
};

export default Forecast;
