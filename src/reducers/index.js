import {combineReducers} from 'redux';

import geolocation from './geolocation';
import meetup from './meetup';
import modal from './modal';
import weather from './weather';

export default combineReducers({
    geolocation, meetup, modal, weather
});
