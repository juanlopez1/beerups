class HttpService {
    static async get(url, credentials) {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                ...credentials
            }
        });
        return response.json();
    }

    static async post(url, credentials, data) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                ...credentials
            }
        });
        return response.success || response.status === 200;
    }

    static async put(url, credentials, data = {}) {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                ...credentials
            }
        });
        return response.success || response.status === 200;
    }
}

export default HttpService;
