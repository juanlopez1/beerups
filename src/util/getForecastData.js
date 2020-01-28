import {ceil, get, map} from 'lodash';

const getForecastData = forecast => map(forecast.list, day => {
    const date = new Date(day.dt * 1000);
    const month = date.getMonth() + 1;
    const dateDay = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return {
        date: `${month < 10 ? `0${month}` : month}-${dateDay < 10 ? `0${dateDay}` : dateDay}-${date.getFullYear()}`,
        time: `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`,
        temp: ceil(day.main.temp),
        feelsLike: ceil(get(day.main, 'feels_like'))
    };
});

export default getForecastData;
