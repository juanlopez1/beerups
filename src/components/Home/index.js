import React from 'react';
import {
    Container, Grid, Paper
} from '@material-ui/core';

import Meetups from './Meetups';
import Weather from './Weather';
import useStyles from './styles';

const Home = () => {
    const styles = useStyles();
    return (
        <Container maxWidth="lg" className={styles.container}>
            <Grid container spacing={3}>
                <Grid item sm={12}>
                    <Paper className={styles.paper}>
                        <Weather/>
                    </Paper>
                </Grid>
                <Grid item sm={12}>
                    <Paper className={styles.paper}>
                        <Meetups/>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
