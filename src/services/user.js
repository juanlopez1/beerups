import HttpService from './http';

const {REACT_APP_BEERUPS_API} = process.env;
const SESSION_KEY = 'session';
const PUBLIC_API_URL = `${REACT_APP_BEERUPS_API}/public-api`;
const USER_API_URL = `${REACT_APP_BEERUPS_API}/api/user`;

class UserService {
    static fetch(credentials) {
        return HttpService.get(`${USER_API_URL}/list`, credentials);
    }

    static async login(credentials) {
        const session = await HttpService.get(`${PUBLIC_API_URL}/login`, credentials);
        await localStorage.setItem(SESSION_KEY, JSON.stringify(session));
        return session;
    }

    static async getSession() {
        const session = await localStorage.getItem(SESSION_KEY);

        if (session) {
            return JSON.parse(session);
        }
        throw new Error('No session.');
    }

    static async clearSession() {
        await localStorage.removeItem(SESSION_KEY);
    }
}

export default UserService;
