import {isEmpty, isNil, some} from 'lodash';

const isSaveButtonDisabled = meetup => some(['title', 'participants', 'place', 'date', 'time', 'beers'], field => (
    isNil(meetup[field]) || isEmpty(meetup[field])
));

export default isSaveButtonDisabled;
