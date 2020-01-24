import React from 'react';
import PropTypes from 'prop-types';
import {Typography} from '@material-ui/core';

const InfoMessage = ({text}) => (
    <Typography variant="subtitle1" color="secondary" gutterBottom>
        {text}
    </Typography>
);

InfoMessage.propTypes = {
    text: PropTypes.string.isRequired
};

export default InfoMessage;
