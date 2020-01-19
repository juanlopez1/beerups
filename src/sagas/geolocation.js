import {call, put} from 'redux-saga/effects';

import Location from '../components/Modal/Location';
import {GeolocationService} from '../services';
import {notifyGetCoordsFailed, receivedCoords} from '../actions/geolocation';
import {requestFetchWeatherByCoords, requestFetchWeatherByCity} from '../actions/weather';
import {showModal} from '../actions/modal';

function* getLocationByModal() {
    yield put(notifyGetCoordsFailed());
    yield put(showModal(Location));
}

export function* getCoords() {
    try {
        if (navigator.geolocation) {
            const location = yield call(GeolocationService.getLocation);
            yield put(receivedCoords(location.coords));
            yield put(requestFetchWeatherByCoords());
        } else {
            yield getLocationByModal();
        }
    } catch (e) {
        yield getLocationByModal();
    }
}

export function* setCity({country, city}) {
    yield put(requestFetchWeatherByCity(country, city));
}
