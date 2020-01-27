import {ceil, divide, multiply} from 'lodash';

const BOX_CAPACITY = 6;
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
        beers, boxes: ceil(divide(beers, BOX_CAPACITY))
    };
};

export default calculateOptimalBeerQuantity;
