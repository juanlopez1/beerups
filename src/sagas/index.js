import {all, takeLatest} from 'redux-saga/effects';

import {
    GEOLOCATION_GET_COORDS_REQUESTED,
    GEOLOCATION_SET_CITY
} from '../actions/geolocation';
import {
    MEETUP_FETCH_REQUESTED,
    MEETUPS_FETCH_REQUESTED,
    MEETUP_SAVE_REQUESTED
} from '../actions/meetup';
import {
    WEATHER_FETCH_FORECAST_REQUESTED,
    WEATHER_FETCH_BY_COORDS_REQUESTED,
    WEATHER_FETCH_BY_CITY_REQUESTED
} from '../actions/weather';
import {
    USER_GET_SESSION_REQUESTED,
    USER_LOGIN_REQUESTED,
    USER_LOG_OUT_REQUESTED,
    USERS_FETCH_REQUESTED
} from '../actions/user';
import {
    getCoords,
    setCity
} from './geolocation';
import {
    fetchMeetup,
    fetchMeetups,
    saveMeetup
} from './meetup';
import {
    fetchForecast,
    fetchWeatherByCoords,
    fetchWeatherByCity
} from './weather';
import {
    fetchUsers,
    clearSession,
    getSession,
    login
} from './user';

function* root() {
    yield all([
        takeLatest(GEOLOCATION_GET_COORDS_REQUESTED, getCoords),
        takeLatest(GEOLOCATION_SET_CITY, setCity),
        takeLatest(MEETUP_FETCH_REQUESTED, fetchMeetup),
        takeLatest(MEETUPS_FETCH_REQUESTED, fetchMeetups),
        takeLatest(MEETUP_SAVE_REQUESTED, saveMeetup),
        takeLatest(USER_GET_SESSION_REQUESTED, getSession),
        takeLatest(USER_LOG_OUT_REQUESTED, clearSession),
        takeLatest(USER_LOGIN_REQUESTED, login),
        takeLatest(USERS_FETCH_REQUESTED, fetchUsers),
        takeLatest(WEATHER_FETCH_BY_COORDS_REQUESTED, fetchWeatherByCoords),
        takeLatest(WEATHER_FETCH_BY_CITY_REQUESTED, fetchWeatherByCity),
        takeLatest(WEATHER_FETCH_FORECAST_REQUESTED, fetchForecast)
    ]);
}

export default root;
