import HttpService from './http';

const {REACT_APP_BEERUPS_API} = process.env;
const MEETUP_API_URL = `${REACT_APP_BEERUPS_API}/api/meetup`;

class MeetupService {
    static async fetchOne(id, credentials) {
        return HttpService.get(`${MEETUP_API_URL}/${id}`, credentials);
    }

    static async fetchMany(credentials) {
        return HttpService.get(`${MEETUP_API_URL}/list`, credentials);
    }

    static async create(data, credentials) {
        return HttpService.post(`${MEETUP_API_URL}/create`, credentials, data);
    }

    static async disable(id, credentials) {
        return HttpService.put(`${MEETUP_API_URL}/disable/${id}`, credentials);
    }

    static async edit(id, credentials, data) {
        return HttpService.put(`${MEETUP_API_URL}/edit/${id}`, credentials, data);
    }
}

export default MeetupService;
