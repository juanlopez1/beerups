import {call, put, select} from 'redux-saga/effects';

import {MeetupService} from '../services';
import {
    notifyFetchMeetupFailed,
    notifyFetchMeetupsFailed,
    notifySaveMeetupFailed,
    notifySaveMeetupSucceeded,
    receiveMeetup,
    receiveMeetups
} from '../actions/meetup';

export function* fetchMeetup({id}) {
    try {
        const {username, password} = yield select(state => state.user);
        const meetup = yield call(MeetupService.fetchOne, {username, password}, id);
        yield put(receiveMeetup(meetup));
    } catch (e) {
        yield put(notifyFetchMeetupFailed());
    }
}

export function* fetchMeetups() {
    try {
        const {username, password} = yield select(state => state.user);
        const {date} = yield select(state => state.meetup.searcher);
        let meetups = [];

        if (date) {
            meetups = yield call(MeetupService.fetchByDate, {username, password}, date);
        } else {
            meetups = yield call(MeetupService.fetchByUser, {username, password});
        }
        yield put(receiveMeetups(meetups));
    } catch (e) {
        yield put(notifyFetchMeetupsFailed());
    }
}

export function* saveMeetup({id}) {
    try {
        const {username, password} = yield select(state => state.user);
        const meetup = yield select(state => state.meetup.meetup);

        if (id) {
            yield call(MeetupService.edit, {username, password}, id, meetup);
        } else {
            yield call(MeetupService.create, {username, password}, meetup);
        }
        yield put(notifySaveMeetupSucceeded());
    } catch (e) {
        yield put(notifySaveMeetupFailed());
    }
}
