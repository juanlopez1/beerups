import {
    MEETUP_FETCH_FAILED,
    MEETUPS_FETCH_FAILED,
    MEETUP_FETCH_REQUESTED,
    MEETUPS_FETCH_REQUESTED,
    MEETUP_FETCH_SUCCEEDED,
    MEETUPS_FETCH_SUCCEEDED
} from '../actions/meetup';

const initialState = {
    error: false,
    fetching: false,
    meetup: {},
    meetups: []
};

const meetup = (state = initialState, action) => {
    switch (action.type) {
        case MEETUP_FETCH_FAILED:
        case MEETUPS_FETCH_FAILED:
            return {
                ...state,
                fetching: false,
                error: true
            };
        case MEETUP_FETCH_REQUESTED:
        case MEETUPS_FETCH_REQUESTED:
            return {
                ...state,
                fetching: true
            };
        case MEETUP_FETCH_SUCCEEDED:
            return {
                ...state,
                fetching: false,
                meetup: action.meetup
            };
        case MEETUPS_FETCH_SUCCEEDED:
            return {
                ...state,
                fetching: false,
                meetups: action.meetups
            };
        default:
            return state;
    }
};

export default meetup;
