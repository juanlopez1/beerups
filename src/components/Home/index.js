import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Container, Grid, Paper
} from '@material-ui/core';

import Meetups from './Meetups';
import Weather from './Weather';
import useStyles from './styles';
import {requestFetchMeetups} from '../../actions/meetup';

const Home = ({onMount}) => {
    const styles = useStyles();
    useEffect(() => {
        onMount();
    }, [onMount]);
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

Home.propTypes = {
    onMount: PropTypes.func.isRequired
};

export default connect(
    null,
    {onMount: requestFetchMeetups}
)(Home);
