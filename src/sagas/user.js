import {call, put, select} from 'redux-saga/effects';

import {UserService} from '../services';
import {
    notifyFetchUsersFailed,
    notifyGetSessionFailed,
    notifyLoginSucceeded,
    notifyLoginFailed,
    notifyLogOutSucceeded,
    receiveSession,
    receiveUsers
} from '../actions/user';

export function* fetchUsers() {
    try {
        const details = yield select(state => state.user.details);
        const users = yield call(UserService.fetch, {username: details.username, role: details.role.value});
        yield put(receiveUsers(users));
    } catch (e) {
        yield put(notifyFetchUsersFailed());
    }
}

export function* login() {
    try {
        const {username, password} = yield select(state => state.user);
        const session = yield call(UserService.login, {username, password});
        yield put(receiveSession(session));
        yield put(notifyLoginSucceeded());
    } catch (e) {
        yield put(notifyLoginFailed());
    }
}

export function* clearSession() {
    try {
        yield call(UserService.clearSession);
        yield put(notifyLogOutSucceeded());
    } catch (e) {
        // TODO: Do something.
    }
}

export function* getSession() {
    try {
        const session = yield call(UserService.getSession);
        yield put(receiveSession(session));
    } catch (e) {
        yield put(notifyGetSessionFailed());
    }
}
