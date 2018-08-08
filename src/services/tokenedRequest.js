import axios from 'axios';
import promise from 'promise';

// Add a request interceptor
var axiosInstance = axios.create();

axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    //If the header does not contain the token and the url not public, redirect to login
    var accessToken = getAccessTokenFromCookies();

    //if token is found add it to the header
    if (accessToken) {
        if (config.method !== 'OPTIONS') {
            config.headers.authorization = accessToken;
        }
    }
    return config;
}, function (error) {
    // Do something with request error
    return promise.reject(error);
});

export default axiosInstance;
