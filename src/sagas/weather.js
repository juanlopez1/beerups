import {call, put, select} from 'redux-saga/effects';

import {WeatherService} from '../services';
import {
    notifyFetchWeatherByCityFailed,
    notifyFetchWeatherByCoordsFailed,
    receivedWeather
} from '../actions/weather';

export function* fetchWeatherByCoords() {
    try {
        const coords = yield select(state => state.geolocation.coords);
        const weather = yield call(WeatherService.fetchWeatherByCoords, coords);
        yield put(receivedWeather(weather));
    } catch (e) {
        yield put(notifyFetchWeatherByCoordsFailed());
    }
}

export function* fetchWeatherByCity() {
    try {
        const city = yield select(state => state.geolocation.city);
        const weather = yield call(WeatherService.fetchWeatherByCity, city);
        yield put(receivedWeather(weather));
    } catch (e) {
        yield put(notifyFetchWeatherByCityFailed());
    }
}
