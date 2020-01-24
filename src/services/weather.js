const {REACT_APP_OPEN_WEATHER_API_ENDPOINT, REACT_APP_OPEN_WEATHER_API_ID} = process.env;

class WeatherService {
    static async fetchWeather(url) {
        const response = await fetch(url, {
            method: 'GET'
        });
        const weather = response.json();

        return weather;
    }

    static async fetchWeatherByCoords(coords) {
        const query = new URLSearchParams();
        query.set('lat', coords.latitude);
        query.set('lon', coords.longitude);
        query.set('units', 'metric');
        query.set('appid', REACT_APP_OPEN_WEATHER_API_ID);
        return WeatherService.fetchWeather(`${REACT_APP_OPEN_WEATHER_API_ENDPOINT}/weather?${query.toString()}`);
    }

    static async fetchWeatherByCity(city) {
        const query = new URLSearchParams();
        query.set('id', city);
        query.set('units', 'metric');
        query.set('appid', REACT_APP_OPEN_WEATHER_API_ID);
        return WeatherService.fetchWeather(`${REACT_APP_OPEN_WEATHER_API_ENDPOINT}/weather?${query.toString()}`);
    }
}

export default WeatherService;
