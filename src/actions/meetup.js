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

export const MEETUPS_CLEAN_STORE = 'MEETUPS_CLEAN_STORE';

export const cleanStoredMeetups = () => ({
    type: MEETUPS_CLEAN_STORE
});

export const MEETUP_HANDLE_CHANGE_ANSWER_FORM = 'MEETUP_HANDLE_CHANGE_ANSWER_FORM';

export const handleChangeAnswerMeetup = answer => ({
    type: MEETUP_HANDLE_CHANGE_ANSWER_FORM,
    answer
});
