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
        const details = yield select(state => state.user.details);
        const meetup = yield call(
            MeetupService.fetchOne, {username: details.username, role: details.role.value}, id
        );
        yield put(receiveMeetup(meetup));
    } catch (e) {
        yield put(notifyFetchMeetupFailed());
    }
}

export function* fetchMeetups() {
    try {
        const details = yield select(state => state.user.details);
        const {date} = yield select(state => state.meetup.searcher);
        let meetups = [];

        if (date) {
            meetups = yield call(
                MeetupService.fetchByDate, {username: details.username, role: details.role.value}, date
            );
        } else {
            meetups = yield call(
                MeetupService.fetchByUser, {username: details.username, role: details.role.value}
            );
        }
        yield put(receiveMeetups(meetups));
    } catch (e) {
        yield put(notifyFetchMeetupsFailed());
    }
}

export function* saveMeetup({id}) {
    try {
        const details = yield select(state => state.user.details);
        const meetup = yield select(state => state.meetup.meetup);

        if (id) {
            yield call(
                MeetupService.edit, {username: details.username, role: details.role.value}, id, meetup
            );
        } else {
            yield call(
                MeetupService.create, {username: details.username, role: details.role.value}, meetup
            );
        }
        yield put(notifySaveMeetupSucceeded());
    } catch (e) {
        yield put(notifySaveMeetupFailed());
    }
}
