import HttpService from './http';

const {REACT_APP_BEERUPS_API} = process.env;
const USER_API_URL = `${REACT_APP_BEERUPS_API}/api/user`;

class UserService {
    static async fetch(credentials) {
        return HttpService.get(`${USER_API_URL}/list`, credentials);
    }
}

export default UserService;
