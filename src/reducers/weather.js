import {
    WEATHER_FETCH_BY_CITY_FAILED,
    WEATHER_FETCH_BY_COORDS_FAILED,
    WEATHER_FETCH_BY_CITY_REQUESTED,
    WEATHER_FETCH_BY_COORDS_REQUESTED,
    WEATHER_FETCH_FORECAST_FAILED,
    WEATHER_FETCH_FORECAST_REQUESTED,
    WEATHER_FETCH_FORECAST_SUCCEEDED,
    WEATHER_FETCH_SUCCEEDED
} from '../actions/weather';

const initialState = {
    error: false,
    fetching: false,
    weather: null,
    forecast: null
};

const weather = (state = initialState, action) => {
    switch (action.type) {
        case WEATHER_FETCH_BY_CITY_FAILED:
        case WEATHER_FETCH_BY_COORDS_FAILED:
        case WEATHER_FETCH_FORECAST_FAILED:
            return {
                ...state,
                fetching: false,
                error: true
            };
        case WEATHER_FETCH_BY_CITY_REQUESTED:
        case WEATHER_FETCH_BY_COORDS_REQUESTED:
        case WEATHER_FETCH_FORECAST_REQUESTED:
            return {
                ...state,
                fetching: true,
                error: false
            };
        case WEATHER_FETCH_FORECAST_SUCCEEDED:
            return {
                ...state,
                fetching: false,
                forecast: action.forecast
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
