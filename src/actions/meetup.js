export const MEETUPS_FETCH_REQUESTED = 'MEETUPS_FETCH_REQUESTED';
export const MEETUPS_FETCH_SUCCEEDED = 'MEETUPS_FETCH_SUCCEEDED';
export const MEETUPS_FETCH_FAILED = 'MEETUPS_FETCH_FAILED';

export const requestFetchMeetups = () => ({
    type: MEETUPS_FETCH_REQUESTED
});

export const receivedMeetups = meetups => ({
    type: MEETUPS_FETCH_SUCCEEDED, meetups
});

export const notifyFetchMeetupsFailed = () => ({
    type: MEETUPS_FETCH_FAILED
});

export const MEETUP_FETCH_REQUESTED = 'MEETUP_FETCH_REQUESTED';
export const MEETUP_FETCH_SUCCEEDED = 'MEETUP_FETCH_SUCCEEDED';
export const MEETUP_FETCH_FAILED = 'MEETUP_FETCH_FAILED';

export const requestFetchMeetup = id => ({
    type: MEETUP_FETCH_REQUESTED, id
});

export const receivedMeetup = meetups => ({
    type: MEETUP_FETCH_SUCCEEDED, meetups
});

export const notifyFetchMeetupFailed = () => ({
    type: MEETUP_FETCH_FAILED
});
