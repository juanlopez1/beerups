export const USERS_FETCH_REQUESTED = 'USERS_FETCH_REQUESTED';
export const USERS_FETCH_SUCCEEDED = 'USERS_FETCH_SUCCEEDED';
export const USERS_FETCH_FAILED = 'USERS_FETCH_FAILED';

export const requestFetchUsers = () => ({
    type: USERS_FETCH_REQUESTED
});

export const receiveUsers = users => ({
    type: USERS_FETCH_SUCCEEDED, users
});

export const notifyFetchUsersFailed = () => ({
    type: USERS_FETCH_FAILED
});
