import React from 'react';
import PropTypes from 'prop-types';
import {Typography} from '@material-ui/core';

const Title = ({text}) => (
    <Typography component="h1" variant="h6" color="primary" gutterBottom>
        {text}
    </Typography>
);

Title.propTypes = {
    text: PropTypes.string.isRequired
};

export default Title;
