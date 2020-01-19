class GeolocationService {
    static async getLocation() {
        const getCurrentPosition = () => new Promise((resolve, reject) => (
            navigator.geolocation.getCurrentPosition(
                location => resolve(location),
                error => reject(error)
            )
        ));
        return getCurrentPosition();
    }
}

export default GeolocationService;
