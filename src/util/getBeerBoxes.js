import {ceil, divide} from 'lodash';

const BOX_CAPACITY = 6;

const getBeerBoxes = beers => ceil(divide(beers, BOX_CAPACITY));

export default getBeerBoxes;
