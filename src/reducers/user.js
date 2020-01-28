import {
    USER_GET_SESSION_FAILED,
    USER_GET_SESSION_SUCCEEDED,
    USER_SIGN_IN_HANDLE_CHANGE,
    USER_LOGIN_REQUESTED,
    USER_LOGIN_FAILED,
    USER_LOGIN_SUCCEEDED,
    USER_LOG_OUT_REQUESTED,
    USERS_FETCH_FAILED,
    USERS_FETCH_REQUESTED,
    USERS_FETCH_SUCCEEDED
} from '../actions/user';

const initialState = {
    username: null,
    password: null,
    details: {},
    users: [],
    logged: false,
    fetching: false,
    loginError: false,
    error: false
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case USERS_FETCH_FAILED:
        case USER_LOGIN_FAILED:
            return {
                ...state,
                fetching: false,
                loginError: true
            };
        case USERS_FETCH_REQUESTED:
        case USER_LOGIN_REQUESTED:
            return {
                ...state,
                fetching: true,
                error: false
            };
        case USERS_FETCH_SUCCEEDED:
            return {
                ...state,
                fetching: false,
                users: action.users
            };
        case USER_LOGIN_SUCCEEDED:
            return {
                ...state,
                logged: true
            };
        case USER_LOG_OUT_REQUESTED:
            return {
                ...initialState
            };
        case USER_SIGN_IN_HANDLE_CHANGE:
            return {
                ...state,
                ...action.answer
            };
        case USER_GET_SESSION_FAILED:
            return {
                ...state,
                logged: false,
                error: true
            };
        case USER_GET_SESSION_SUCCEEDED:
            return {
                ...state,
                logged: true,
                details: action.session
            };
        default:
            return state;
    }
};

export default user;
