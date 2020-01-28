import {call, put, select} from 'redux-saga/effects';

import {WeatherService} from '../services';
import {
    notifyFetchForecastFailed,
    notifyFetchWeatherByCityFailed,
    notifyFetchWeatherByCoordsFailed,
    receiveForecast,
    receiveWeather,
    requestFetchForecast
} from '../actions/weather';

export function* fetchForecast() {
    try {
        const {coord} = yield select(state => state.weather.weather);
        const forecast = yield call(WeatherService.fetchForecastByCoord, coord);
        yield put(receiveForecast(forecast));
    } catch (e) {
        yield put(notifyFetchForecastFailed());
    }
}

export function* fetchWeatherByCoords() {
    try {
        const coords = yield select(state => state.geolocation.coords);
        const weather = yield call(WeatherService.fetchWeatherByCoords, coords);
        yield put(receiveWeather(weather));
        yield put(requestFetchForecast());
    } catch (e) {
        yield put(notifyFetchWeatherByCoordsFailed());
    }
}

export function* fetchWeatherByCity() {
    try {
        const city = yield select(state => state.geolocation.city);
        const weather = yield call(WeatherService.fetchWeatherByCity, city);
        yield put(receiveWeather(weather));
        yield put(requestFetchForecast());
    } catch (e) {
        yield put(notifyFetchWeatherByCityFailed());
    }
}
