import HttpService from './http';

const {REACT_APP_BEERUPS_API} = process.env;
const MEETUP_API_URL = `${REACT_APP_BEERUPS_API}/api/meetup`;

class MeetupService {
    static async fetchOne(credentials, id) {
        return HttpService.get(`${MEETUP_API_URL}/${id}`, credentials);
    }

    static async fetchByDate(credentials, date) {
        return HttpService.get(`${MEETUP_API_URL}/list/${date}`, credentials);
    }

    static async fetchByUser(credentials) {
        return HttpService.get(`${MEETUP_API_URL}/list`, credentials);
    }

    static async create(credentials, data) {
        return HttpService.post(`${MEETUP_API_URL}/create`, credentials, data);
    }

    static async disable(credentials, id) {
        return HttpService.put(`${MEETUP_API_URL}/disable/${id}`, credentials);
    }

    static async edit(credentials, id, data) {
        return HttpService.put(`${MEETUP_API_URL}/edit/${id}`, credentials, data);
    }
}

export default MeetupService;
