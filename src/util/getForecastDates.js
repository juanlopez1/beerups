import {
    concat, reduce, uniq
} from 'lodash';

const getForecastDates = forecast => uniq(
    reduce(forecast, (days, day) => concat(days, day.date), [])
);

export default getForecastDates;
