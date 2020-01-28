import {getForecastData, getForecastDates, getWeatherData} from '../util';

const {REACT_APP_OPEN_WEATHER_API_ENDPOINT, REACT_APP_OPEN_WEATHER_API_ID} = process.env;
const WEATHER_API_URL = `${REACT_APP_OPEN_WEATHER_API_ENDPOINT}/weather`;
const FORECAST_API_URL = `${REACT_APP_OPEN_WEATHER_API_ENDPOINT}/forecast`;

class WeatherService {
    static async fetchForecast(url) {
        const response = await fetch(url, {
            method: 'GET'
        });
        return getForecastData(await response.json());
    }

    static async fetchForecastByCoord(coord) {
        const query = new URLSearchParams();
        query.set('lat', coord.lat);
        query.set('lon', coord.lon);
        query.set('units', 'metric');
        query.set('appid', REACT_APP_OPEN_WEATHER_API_ID);
        const forecast = await WeatherService.fetchForecast(`${FORECAST_API_URL}?${query.toString()}`);
        return {
            data: forecast,
            dates: getForecastDates(forecast)
        };
    }

    static async fetchWeather(url) {
        const response = await fetch(url, {
            method: 'GET'
        });
        return getWeatherData(await response.json());
    }

    static async fetchWeatherByCoords(coords) {
        const query = new URLSearchParams();
        query.set('lat', coords.latitude);
        query.set('lon', coords.longitude);
        query.set('units', 'metric');
        query.set('appid', REACT_APP_OPEN_WEATHER_API_ID);
        return WeatherService.fetchWeather(`${WEATHER_API_URL}?${query.toString()}`);
    }

    static async fetchWeatherByCity(city) {
        const query = new URLSearchParams();
        query.set('id', city);
        query.set('units', 'metric');
        query.set('appid', REACT_APP_OPEN_WEATHER_API_ID);
        return WeatherService.fetchWeather(`${WEATHER_API_URL}?${query.toString()}`);
    }
}

export default WeatherService;
