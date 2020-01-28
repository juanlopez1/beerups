import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Form from './Form';
import {
    PaperCard, RouteContainer, Title
} from '../common';
import {requestFetchMeetup, requestSaveMeetup} from '../../actions/meetup';

const MeetupEditor = ({
    history, match, onMount, onSubmit
}) => {
    const handleSubmit = () => {
        onSubmit(match.params.id || undefined);
        history.goBack();
    };

    useEffect(() => {
        if (match.params.id) {
            onMount(match.params.id);
        }
    }, [match, onMount]);

    return (
        <RouteContainer>
            <PaperCard>
                <Title>Meetup Editor</Title>
                <Form onSubmit={handleSubmit}/>
            </PaperCard>
        </RouteContainer>
    );
};

MeetupEditor.propTypes = {
    onMount: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func,
        goBack: PropTypes.func
    }).isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    }).isRequired
};

export default connect(
    null,
    {
        onMount: requestFetchMeetup,
        onSubmit: requestSaveMeetup
    }
)(MeetupEditor);
