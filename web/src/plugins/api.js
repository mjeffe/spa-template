import Axios from 'axios';
import { handleError } from './apiErrorHandler';

const apiUrl = process.env.VUE_APP_API_URL;
const axios = Axios.create({
    baseURL: apiUrl,
    // headers: { 'X-CLIENT-NAME': VUE_APP_CLIENT_NAME, }
});

const handleMethod = function(method, url, payload) {
    return axios({ url: apiUrl + url, method: method, data: payload })
        .then((resp) => { return resp.data.data; })     // resolve
        .catch((err) => { throw handleError(err); });   // reject
};

export default {
    http: axios,

    init() {
        const token = localStorage.getItem('token');
        if (token) {
            this.setApiToken(token);
        }
    },

    setApiToken(token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },

    clearApiToken() {
        delete axios.defaults.headers.common['Authorization'];
    },

    get(url) { return handleMethod('GET', url, null); },
    put(url, payload) { return handleMethod('PUT', url, payload); },
    post(url, payload) { return handleMethod('POST', url, payload); },
    patch(url, payload) { return handleMethod('PATCH', url, payload); },
    delete(url, payload) { return handleMethod('DELETE', url, null); },
};

