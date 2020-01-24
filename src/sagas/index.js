import {all, takeLatest} from 'redux-saga/effects';

import {
    GEOLOCATION_GET_COORDS_REQUESTED,
    GEOLOCATION_SET_CITY
} from '../actions/geolocation';
import {
    MEETUP_FETCH_REQUESTED,
    MEETUPS_FETCH_REQUESTED
} from '../actions/meetup';
import {
    WEATHER_FETCH_BY_COORDS_REQUESTED,
    WEATHER_FETCH_BY_CITY_REQUESTED
} from '../actions/weather';
import {
    getCoords,
    setCity
} from './geolocation';
import {
    fetchMeetup,
    fetchMeetups
} from './meetup';
import {
    fetchWeatherByCoords,
    fetchWeatherByCity
} from './weather';

function* root() {
    yield all([
        takeLatest(GEOLOCATION_GET_COORDS_REQUESTED, getCoords),
        takeLatest(GEOLOCATION_SET_CITY, setCity),
        takeLatest(MEETUP_FETCH_REQUESTED, fetchMeetup),
        takeLatest(MEETUPS_FETCH_REQUESTED, fetchMeetups),
        takeLatest(WEATHER_FETCH_BY_COORDS_REQUESTED, fetchWeatherByCoords),
        takeLatest(WEATHER_FETCH_BY_CITY_REQUESTED, fetchWeatherByCity)
    ]);
}

export default root;
