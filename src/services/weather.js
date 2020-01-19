import HttpService from './http';

const {REACT_APP_OPEN_WEATHER_API_ENDPOINT, REACT_APP_OPEN_WEATHER_API_ID} = process.env;

class WeatherService {
    static async fetchWeatherByCoords(coords) {
        const query = new URLSearchParams();
        query.set('lat', coords.latitude);
        query.set('lon', coords.longitude);
        query.set('units', 'metric');
        query.set('appid', REACT_APP_OPEN_WEATHER_API_ID);
        return HttpService.get(`${REACT_APP_OPEN_WEATHER_API_ENDPOINT}weather?${query.toString()}`);
    }

    static async fetchWeatherByCity(city) {
        const query = new URLSearchParams();
        query.set('id', city);
        query.set('units', 'metric');
        query.set('appid', REACT_APP_OPEN_WEATHER_API_ID);
        return HttpService.get(`${REACT_APP_OPEN_WEATHER_API_ENDPOINT}weather?${query.toString()}`);
    }
}

export default WeatherService;
