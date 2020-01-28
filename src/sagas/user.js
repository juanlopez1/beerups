/* eslint-disable import/prefer-default-export */
import {call, put, select} from 'redux-saga/effects';

import {UserService} from '../services';
import {notifyFetchUsersFailed, receiveUsers} from '../actions/user';

export function* fetchUsers() {
    try {
        const {username, password} = yield select(state => state.user);
        const users = yield call(UserService.fetch, {username, password});
        yield put(receiveUsers(users));
    } catch (e) {
        yield put(notifyFetchUsersFailed());
    }
}
