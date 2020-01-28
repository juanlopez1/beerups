import React from 'react';
import PropTypes from 'prop-types';
import {Typography} from '@material-ui/core';

const Title = ({children}) => (
    <Typography component="h1" variant="h6" color="primary" gutterBottom>
        {children}
    </Typography>
);

Title.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};

export default Title;
