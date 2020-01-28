export const GEOLOCATION_GET_COORDS_REQUESTED = 'GEOLOCATION_GET_COORDS_REQUESTED';
export const GEOLOCATION_GET_COORDS_SUCCEEDED = 'GEOLOCATION_GET_COORDS_SUCCEEDED';
export const GEOLOCATION_GET_COORDS_FAILED = 'GEOLOCATION_GET_COORDS_FAILED';

export const requestGetCoords = () => ({
    type: GEOLOCATION_GET_COORDS_REQUESTED
});

export const receiveCoords = coords => ({
    type: GEOLOCATION_GET_COORDS_SUCCEEDED,
    coords
});

export const notifyGetCoordsFailed = () => ({
    type: GEOLOCATION_GET_COORDS_FAILED
});

export const GEOLOCATION_SET_CITY = 'GEOLOCATION_SET_CITY';

export const setGeolocationCity = city => ({
    type: GEOLOCATION_SET_CITY,
    city
});
