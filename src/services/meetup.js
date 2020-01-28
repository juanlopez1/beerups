import HttpService from './http';

const {REACT_APP_BEERUPS_API} = process.env;
const MEETUP_API_URL = `${REACT_APP_BEERUPS_API}/api/meetup`;

class MeetupService {
    static fetchOne(credentials, id) {
        return HttpService.get(`${MEETUP_API_URL}/${id}`, credentials);
    }

    static fetchByDate(credentials, date) {
        return HttpService.get(`${MEETUP_API_URL}/list/${date}`, credentials);
    }

    static fetchByUser(credentials) {
        return HttpService.get(`${MEETUP_API_URL}/list`, credentials);
    }

    static create(credentials, data) {
        return HttpService.post(`${MEETUP_API_URL}/create`, credentials, data);
    }

    static edit(credentials, id, data) {
        return HttpService.put(`${MEETUP_API_URL}/edit/${id}`, credentials, data);
    }
}

export default MeetupService;
