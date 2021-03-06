import React from 'react';
import PropTypes from 'prop-types';
import {Typography} from '@material-ui/core';

import {PaperCard} from '../../common';
import {calculateOptimalBeerQuantity} from '../../../util';
import roles from '../../../static/roles';

const Forecast = ({forecast, participants, role}) => {
    const beers = calculateOptimalBeerQuantity(participants, forecast.temp);
    const feelsLikeBeers = calculateOptimalBeerQuantity(participants, forecast.feelsLike);
    return (
        <PaperCard>
            <Typography component="h4" color="primary">
                Forecast
            </Typography>
            <div className="forecast">
                <div className="temp">
                    {`${forecast.temp} °C`}
                </div>
                {role === roles.ADMIN && (
                    <p className="temp-description">
                        {`We recommend you to order ${beers.beers} beers (${beers.boxes} boxes)`}
                    </p>
                )}
                <div className="feels-like">
                    {`${forecast.feelsLike} °C (feels like)`}
                </div>
                {role === roles.ADMIN && (
                    <p className="feels-like-description">
                        {`We recommend you to order ${feelsLikeBeers.beers} beers (${feelsLikeBeers.boxes} boxes)`}
                    </p>
                )}
            </div>
        </PaperCard>
    );
};

Forecast.propTypes = {
    forecast: PropTypes.shape({
        temp: PropTypes.number,
        feelsLike: PropTypes.number
    }).isRequired,
    participants: PropTypes.number.isRequired,
    role: PropTypes.string.isRequired
};

export default Forecast;
