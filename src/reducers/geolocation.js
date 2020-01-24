import {
    GEOLOCATION_GET_COORDS_FAILED,
    GEOLOCATION_GET_COORDS_REQUESTED,
    GEOLOCATION_GET_COORDS_SUCCEEDED,
    GEOLOCATION_SET_CITY
} from '../actions/geolocation';

const initialState = {
    error: false,
    city: null,
    getting: false,
    coords: null
};

const geolocation = (state = initialState, action) => {
    switch (action.type) {
        case GEOLOCATION_GET_COORDS_FAILED:
            return {
                ...state,
                getting: false,
                error: true
            };
        case GEOLOCATION_GET_COORDS_REQUESTED:
            return {
                ...state,
                getting: true
            };
        case GEOLOCATION_GET_COORDS_SUCCEEDED:
            return {
                ...state,
                getting: false,
                coords: action.coords
            };
        case GEOLOCATION_SET_CITY:
            return {
                ...state,
                getting: false,
                city: action.city
            };
        default:
            return state;
    }
};

export default geolocation;
