import HttpService from './http';

const {REACT_APP_BEERUPS_API} = process.env;
const ORDER_API_URL = `${REACT_APP_BEERUPS_API}/api/order`;

class OrderService {
    static async fetchOne(id) {
        return HttpService.get(`${ORDER_API_URL}/${id}`);
    }

    static async create(data) {
        return HttpService.post(`${ORDER_API_URL}/create`, data);
    }

    static async disable(id) {
        return HttpService.put(`${ORDER_API_URL}/disable/${id}`);
    }

    static async edit(id, data) {
        return HttpService.put(`${ORDER_API_URL}/edit/${id}`, data);
    }
}

export default OrderService;
