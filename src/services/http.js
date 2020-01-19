class HttpService {
    static async get(url) {
        const response = await fetch(url, {
            method: 'GET'
        });
        return response.json();
    }
}

export default HttpService;
