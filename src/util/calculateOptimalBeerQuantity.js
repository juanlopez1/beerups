import {ceil, multiply} from 'lodash';

import getBeerBoxes from './getBeerBoxes';

const COLD_TEMP = 20;
const COLD_TEMP_BEERS_PER_PERSON = 0.75;
const HOT_TEMP = 24;
const HOT_TEMP_BEERS_PER_PERSON = 3;

const calculateOptimalBeerQuantity = (people, temperature) => {
    let beers;
    if (temperature >= COLD_TEMP && temperature <= HOT_TEMP) {
        beers = people;
    } else if (temperature < COLD_TEMP) {
        beers = ceil(multiply(people, COLD_TEMP_BEERS_PER_PERSON));
    } else {
        beers = ceil(multiply(people, HOT_TEMP_BEERS_PER_PERSON));
    }
    return {
        beers,
        boxes: getBeerBoxes(beers)
    };
};

export default calculateOptimalBeerQuantity;
