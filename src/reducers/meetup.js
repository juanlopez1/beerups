import {
    MEETUP_FETCH_FAILED,
    MEETUP_FETCH_REQUESTED,
    MEETUP_FETCH_SUCCEEDED,
    MEETUP_HANDLE_CHANGE_ANSWER_FORM,
    MEETUP_SEARCHER_HANDLE_CHANGE_DATE,
    MEETUPS_RESET_REDUCER,
    MEETUPS_FETCH_FAILED,
    MEETUPS_FETCH_REQUESTED,
    MEETUPS_FETCH_SUCCEEDED,
    MEETUP_SAVE_REQUESTED,
    MEETUP_SAVE_FAILED,
    MEETUP_SAVE_SUCCEEDED
} from '../actions/meetup';
import {getMinDate} from '../util';

const initialState = {
    error: false,
    fetching: false,
    meetup: {},
    meetups: [],
    searcher: {
        date: '',
        min: getMinDate()
    }
};

const meetup = (state = initialState, action) => {
    switch (action.type) {
        case MEETUPS_RESET_REDUCER:
            return {...initialState};
        case MEETUP_SAVE_FAILED:
        case MEETUP_FETCH_FAILED:
        case MEETUPS_FETCH_FAILED:
            return {
                ...state,
                fetching: false,
                error: true
            };
        case MEETUP_SAVE_REQUESTED:
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
        case MEETUP_SAVE_SUCCEEDED:
            return {
                ...state,
                meetup: {}
            };
        default:
            return state;
    }
};

export default meetup;
