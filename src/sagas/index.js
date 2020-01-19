import {all, takeLatest} from 'redux-saga/effects';

import {
    GEOLOCATION_GET_COORDS_REQUESTED,
    GEOLOCATION_SET_CITY
} from '../actions/geolocation';
import {
    WEATHER_FETCH_BY_COORDS_REQUESTED,
    WEATHER_FETCH_BY_CITY_REQUESTED
} from '../actions/weather';
import {
    getCoords,
    setCity
} from './geolocation';
import {
    fetchWeatherByCoords,
    fetchWeatherByCity
} from './weather';

function* root() {
    yield all([
        takeLatest(GEOLOCATION_GET_COORDS_REQUESTED, getCoords),
        takeLatest(GEOLOCATION_SET_CITY, setCity),
        takeLatest(WEATHER_FETCH_BY_COORDS_REQUESTED, fetchWeatherByCoords),
        takeLatest(WEATHER_FETCH_BY_CITY_REQUESTED, fetchWeatherByCity)
    ]);
}

export default root;
