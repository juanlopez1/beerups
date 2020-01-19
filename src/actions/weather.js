export const WEATHER_FETCH_BY_COORDS_REQUESTED = 'WEATHER_FETCH_BY_COORDS_REQUESTED';
export const WEATHER_FETCH_BY_COORDS_FAILED = 'WEATHER_FETCH_BY_COORDS_FAILED';

export const requestFetchWeatherByCoords = () => ({
    type: WEATHER_FETCH_BY_COORDS_REQUESTED
});

export const notifyFetchWeatherByCoordsFailed = () => ({
    type: WEATHER_FETCH_BY_COORDS_FAILED
});

export const WEATHER_FETCH_BY_CITY_REQUESTED = 'WEATHER_FETCH_BY_CITY_REQUESTED';
export const WEATHER_FETCH_BY_CITY_FAILED = 'WEATHER_FETCH_BY_CITY_FAILED';

export const requestFetchWeatherByCity = (city, country) => ({
    type: WEATHER_FETCH_BY_CITY_REQUESTED, city, country
});

export const notifyFetchWeatherByCityFailed = () => ({
    type: WEATHER_FETCH_BY_CITY_FAILED
});

export const WEATHER_FETCH_SUCCEEDED = 'WEATHER_FETCH_SUCCEEDED';

export const receivedWeather = weather => ({
    type: WEATHER_FETCH_SUCCEEDED, weather
});
