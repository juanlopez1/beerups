import {
    WEATHER_FETCH_BY_CITY_FAILED,
    WEATHER_FETCH_BY_COORDS_FAILED,
    WEATHER_FETCH_BY_CITY_REQUESTED,
    WEATHER_FETCH_BY_COORDS_REQUESTED,
    WEATHER_FETCH_SUCCEEDED
} from '../actions/weather';

const initialState = {
    fetching: false,
    weather: null
};

const weather = (state = initialState, action) => {
    switch (action.type) {
        case WEATHER_FETCH_BY_CITY_FAILED:
        case WEATHER_FETCH_BY_COORDS_FAILED:
            return {
                ...state,
                fetching: false
            };
        case WEATHER_FETCH_BY_CITY_REQUESTED:
        case WEATHER_FETCH_BY_COORDS_REQUESTED:
            return {
                ...state,
                fetching: true
            };
        case WEATHER_FETCH_SUCCEEDED:
            return {
                ...state,
                fetching: false,
                weather: action.weather
            };
        default:
            return state;
    }
};

export default weather;
