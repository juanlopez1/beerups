import {call, put, select} from 'redux-saga/effects';
import {split} from 'lodash';

import {MeetupService} from '../services';
import {
    notifyCheckInMeetupFailed,
    notifyCheckInMeetupSucceeded,
    notifyFetchMeetupFailed,
    notifyFetchMeetupsFailed,
    notifySaveMeetupFailed,
    notifySaveMeetupSucceeded,
    notifyParticipateInMeetupFailed,
    notifyParticipateInMeetupSucceeded,
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
        const splittedDate = split(date, '-');
        const searchDate = `${splittedDate[1]}-${splittedDate[2]}-${splittedDate[0]}`;
        let meetups = [];

        if (date) {
            meetups = yield call(
                MeetupService.fetchByDate, {username: details.username, role: details.role.value}, searchDate
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

export function* checkInMeetup({id}) {
    try {
        const details = yield select(state => state.user.details);
        yield call(
            MeetupService.checkIn, {username: details.username, role: details.role.value}, id
        );
        yield put(notifyCheckInMeetupSucceeded());
        yield call(fetchMeetups);
    } catch (e) {
        yield put(notifyCheckInMeetupFailed());
    }
}

export function* participateInMeetup({id}) {
    try {
        const details = yield select(state => state.user.details);
        yield call(
            MeetupService.participate, {username: details.username, role: details.role.value}, id
        );
        yield put(notifyParticipateInMeetupSucceeded());
        yield call(fetchMeetups);
    } catch (e) {
        yield put(notifyParticipateInMeetupFailed());
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
