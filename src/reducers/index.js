import {combineReducers} from 'redux';

import geolocation from './geolocation';
import meetup from './meetup';
import modal from './modal';
import user from './user';
import weather from './weather';

export default combineReducers({
    geolocation, meetup, modal, user, weather
});
