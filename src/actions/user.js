export const USERS_FETCH_REQUESTED = 'USERS_FETCH_REQUESTED';
export const USERS_FETCH_SUCCEEDED = 'USERS_FETCH_SUCCEEDED';
export const USERS_FETCH_FAILED = 'USERS_FETCH_FAILED';

export const requestFetchUsers = () => ({
    type: USERS_FETCH_REQUESTED
});

export const receiveUsers = users => ({
    type: USERS_FETCH_SUCCEEDED,
    users
});

export const notifyFetchUsersFailed = () => ({
    type: USERS_FETCH_FAILED
});

export const USER_LOGIN_REQUESTED = 'USER_LOGIN_REQUESTED';
export const USER_LOGIN_SUCCEEDED = 'USER_LOGIN_SUCCEEDED';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';

export const requestLogin = () => ({
    type: USER_LOGIN_REQUESTED
});

export const notifyLoginSucceeded = () => ({
    type: USER_LOGIN_SUCCEEDED
});

export const notifyLoginFailed = () => ({
    type: USER_LOGIN_FAILED
});

export const USER_SIGN_IN_HANDLE_CHANGE = 'USER_SIGN_IN_HANDLE_CHANGE';

export const handleChangeSignIn = answer => ({
    type: USER_SIGN_IN_HANDLE_CHANGE,
    answer
});

export const USER_GET_SESSION_REQUESTED = 'USER_GET_SESSION_REQUESTED';
export const USER_GET_SESSION_SUCCEEDED = 'USER_GET_SESSION_SUCCEEDED';
export const USER_GET_SESSION_FAILED = 'USER_GET_SESSION_FAILED';

export const requestGetSession = () => ({
    type: USER_GET_SESSION_REQUESTED
});

export const receiveSession = session => ({
    type: USER_GET_SESSION_SUCCEEDED,
    session
});

export const notifyGetSessionFailed = () => ({
    type: USER_GET_SESSION_FAILED
});

export const USER_LOG_OUT_REQUESTED = 'USER_LOG_OUT_REQUESTED';
export const USER_LOG_OUT_SUCCEEDED = 'USER_LOG_OUT_SUCCEEDED';

export const requestLogOut = () => ({
    type: USER_LOG_OUT_REQUESTED
});

export const notifyLogOutSucceeded = () => ({
    type: USER_LOG_OUT_SUCCEEDED
});
