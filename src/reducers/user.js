import {
    USERS_FETCH_FAILED,
    USERS_FETCH_REQUESTED,
    USERS_FETCH_SUCCEEDED
} from '../actions/user';

const initialState = {
    username: 'admin-one',
    password: '123456',
    details: {},
    users: [],
    login: false,
    fetching: false,
    error: false
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case USERS_FETCH_FAILED:
            return {
                ...state,
                fetching: false,
                error: true
            };
        case USERS_FETCH_REQUESTED:
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
        default:
            return state;
    }
};

export default user;
