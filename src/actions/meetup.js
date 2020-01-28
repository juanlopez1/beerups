export const MEETUPS_FETCH_REQUESTED = 'MEETUPS_FETCH_REQUESTED';
export const MEETUPS_FETCH_SUCCEEDED = 'MEETUPS_FETCH_SUCCEEDED';
export const MEETUPS_FETCH_FAILED = 'MEETUPS_FETCH_FAILED';

export const requestFetchMeetups = () => ({
    type: MEETUPS_FETCH_REQUESTED
});

export const receiveMeetups = meetups => ({
    type: MEETUPS_FETCH_SUCCEEDED,
    meetups
});

export const notifyFetchMeetupsFailed = () => ({
    type: MEETUPS_FETCH_FAILED
});

export const MEETUP_FETCH_REQUESTED = 'MEETUP_FETCH_REQUESTED';
export const MEETUP_FETCH_SUCCEEDED = 'MEETUP_FETCH_SUCCEEDED';
export const MEETUP_FETCH_FAILED = 'MEETUP_FETCH_FAILED';

export const requestFetchMeetup = id => ({
    type: MEETUP_FETCH_REQUESTED,
    id
});

export const receiveMeetup = meetup => ({
    type: MEETUP_FETCH_SUCCEEDED,
    meetup
});

export const notifyFetchMeetupFailed = () => ({
    type: MEETUP_FETCH_FAILED
});

export const MEETUP_SEARCHER_HANDLE_CHANGE_DATE = 'MEETUP_SEARCHER_HANDLE_CHANGE_DATE';

export const handleChangeSearcherDate = date => ({
    type: MEETUP_SEARCHER_HANDLE_CHANGE_DATE,
    date
});

export const MEETUPS_RESET_REDUCER = 'MEETUPS_RESET_REDUCER';

export const resetMeetupsReducer = () => ({
    type: MEETUPS_RESET_REDUCER
});

export const MEETUP_HANDLE_CHANGE_ANSWER_FORM = 'MEETUP_HANDLE_CHANGE_ANSWER_FORM';

export const handleChangeAnswerMeetup = answer => ({
    type: MEETUP_HANDLE_CHANGE_ANSWER_FORM,
    answer
});

export const MEETUP_SAVE_REQUESTED = 'MEETUP_SAVE_REQUESTED';
export const MEETUP_SAVE_SUCCEEDED = 'MEETUP_SAVE_SUCCEEDED';
export const MEETUP_SAVE_FAILED = 'MEETUP_SAVE_FAILED';

export const requestSaveMeetup = id => ({
    type: MEETUP_SAVE_REQUESTED,
    id
});

export const notifySaveMeetupSucceeded = () => ({
    type: MEETUP_SAVE_SUCCEEDED
});

export const notifySaveMeetupFailed = () => ({
    type: MEETUP_SAVE_FAILED
});

export const MEETUP_CHECK_IN_REQUESTED = 'MEETUP_CHECK_IN_REQUESTED';
export const MEETUP_CHECK_IN_SUCCEEDED = 'MEETUP_CHECK_IN_SUCCEEDED';
export const MEETUP_CHECK_IN_FAILED = 'MEETUP_CHECK_IN_FAILED';

export const requestCheckInMeetup = id => ({
    type: MEETUP_CHECK_IN_REQUESTED,
    id
});

export const notifyCheckInMeetupSucceeded = () => ({
    type: MEETUP_CHECK_IN_SUCCEEDED
});

export const notifyCheckInMeetupFailed = () => ({
    type: MEETUP_CHECK_IN_FAILED
});

export const MEETUP_PARTICIPATE_REQUESTED = 'MEETUP_PARTICIPATE_REQUESTED';
export const MEETUP_PARTICIPATE_SUCCEEDED = 'MEETUP_PARTICIPATE_SUCCEEDED';
export const MEETUP_PARTICIPATE_FAILED = 'MEETUP_PARTICIPATE_FAILED';

export const requestParticipateInMeetup = id => ({
    type: MEETUP_PARTICIPATE_REQUESTED,
    id
});

export const notifyParticipateInMeetupSucceeded = () => ({
    type: MEETUP_PARTICIPATE_SUCCEEDED
});

export const notifyParticipateInMeetupFailed = () => ({
    type: MEETUP_PARTICIPATE_FAILED
});
