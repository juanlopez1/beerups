import {combineReducers} from 'redux';

import geolocation from './geolocation';
import modal from './modal';
import weather from './weather';

export default combineReducers({
    geolocation, modal, weather
});
