import {
    MEETUP_FETCH_FAILED,
    MEETUP_FETCH_REQUESTED,
    MEETUP_FETCH_SUCCEEDED,
    MEETUP_HANDLE_CHANGE_ANSWER_FORM,
    MEETUP_SEARCHER_HANDLE_CHANGE_DATE,
    MEETUPS_CLEAN_STORE,
    MEETUPS_FETCH_FAILED,
    MEETUPS_FETCH_REQUESTED,
    MEETUPS_FETCH_SUCCEEDED
} from '../actions/meetup';

const initialState = {
    error: false,
    fetching: false,
    meetup: {},
    meetups: [],
    searcher: {
        date: ''
    }
};

const meetup = (state = initialState, action) => {
    switch (action.type) {
        case MEETUPS_CLEAN_STORE:
            return {
                ...state,
                meetups: []
            };
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
                fetching: true,
                error: false
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
        case MEETUP_SEARCHER_HANDLE_CHANGE_DATE:
            return {
                ...state,
                searcher: {
                    ...state.searcher,
                    date: action.date
                }
            };
        case MEETUP_HANDLE_CHANGE_ANSWER_FORM:
            return {
                ...state,
                meetup: {...state.meetup, ...action.answer}
            };
        default:
            return state;
    }
};

export default meetup;
