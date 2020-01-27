import {call, put, select} from 'redux-saga/effects';

import {MeetupService} from '../services';
import {
    notifyFetchMeetupFailed,
    notifyFetchMeetupsFailed,
    receivedMeetup,
    receivedMeetups
} from '../actions/meetup';

export function* fetchMeetup({id}) {
    try {
        const {username, password} = yield select(state => state.user);
        const meetup = yield call(MeetupService.fetchOne, id, {username, password});
        yield put(receivedMeetup(meetup));
    } catch (e) {
        yield put(notifyFetchMeetupFailed());
    }
}

export function* fetchMeetups() {
    try {
        const {username, password} = yield select(state => state.user);
        const {date} = yield select(state => state.meetup.searcher);
        const meetups = yield call(MeetupService.fetchMany, {username, password}, date);
        yield put(receivedMeetups(meetups));
    } catch (e) {
        yield put(notifyFetchMeetupsFailed());
    }
}
