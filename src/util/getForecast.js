import {
    concat, filter, find, head, reduce, split, toNumber
} from 'lodash';

const getForecast = (forecast, meetup) => {
    const hours = toNumber(head(split(meetup.time, ':')));
    const dateForecasts = filter(forecast.data, dateForecast => dateForecast.date === meetup.date);
    const times = reduce(dateForecasts, (accumulator, dateForecast) => concat(accumulator, dateForecast.time), []);
    let time = head(times);

    for (let i = 0; i < times.length; i += 1) {
        const actualHour = toNumber(head(split(times[i], ':')));
        const nextHour = toNumber(head(split(times[i + 1], ':')));

        if (hours >= actualHour && hours < nextHour) {
            time = times[i];
            break;
        }
        if (hours === nextHour) {
            time = times[i + 1];
            break;
        }
    }
    return find(dateForecasts, dateForecast => dateForecast.time === time);
};

export default getForecast;
