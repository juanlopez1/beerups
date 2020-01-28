import React from 'react';
import {Container, Grid} from '@material-ui/core';

import {childrenPropTypes} from '../../util';

const RouteContainer = ({children}) => (
    <Container maxWidth="lg" className="route-container">
        <Grid container spacing={3}>
            <Grid item sm={12}>
                {children}
            </Grid>
        </Grid>
    </Container>
);

RouteContainer.propTypes = {
    children: childrenPropTypes.isRequired
};

export default RouteContainer;
