import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Meetups from './Meetups';
import Weather from './Weather';
import {RouteContainer, PaperCard} from '../common';
import {requestFetchMeetups, resetMeetupsReducer} from '../../actions/meetup';

const Home = ({onMount}) => {
    useEffect(() => {
        onMount();
    }, [onMount]);

    return (
        <RouteContainer>
            <PaperCard>
                <Weather/>
            </PaperCard>
            <PaperCard>
                <Meetups/>
            </PaperCard>
        </RouteContainer>
    );
};

Home.propTypes = {
    onMount: PropTypes.func.isRequired
};

export default connect(
    null,
    dispatch => ({
        onMount: () => {
            dispatch(resetMeetupsReducer());
            dispatch(requestFetchMeetups());
        }
    })
)(Home);
