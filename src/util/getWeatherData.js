import {ceil, get, head} from 'lodash';

const {REACT_APP_OPEN_WEATHER_API_ICON_ENDPOINT} = process.env;

const getWeatherData = weather => {
    const data = head(weather.weather);
    return {
        name: weather.name,
        country: weather.sys.country,
        coord: weather.coord,
        details: {
            title: data.main,
            description: data.description,
            icon: `${REACT_APP_OPEN_WEATHER_API_ICON_ENDPOINT}/${data.icon}.png`,
            temp: ceil(weather.main.temp),
            feelsLike: ceil(get(weather.main, 'feels_like')),
            min: ceil(get(weather.main, 'temp_min')),
            max: ceil(get(weather.main, 'temp_max')),
            pressure: weather.main.pressure,
            humidity: weather.main.humidity
        }
    };
};

export default getWeatherData;
