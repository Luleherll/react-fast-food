import axios from 'axios';
import {errorOccurred} from './UserActions';

const axiosInstance = axios.create({
    baseURL: 'https://lule-persistent.herokuapp.com/api/v2/',
});

axiosInstance.interceptors.response.use(
    response => response,
    error => Promise.reject(error.response.data),
);

const getDataThunk = (endpoint, actionCreator) => (dispatch) => {
        const token = localStorage.getItem('user');
    axiosInstance.defaults.headers.common.Authorization = 'Bearer '.concat(token);
        return axiosInstance.get(endpoint).then((response) => {
            console.log(response)
            dispatch(actionCreator(response.data));
        }).catch(err => dispatch(errorOccurred(err)))
};

const postDataThunk = (endpoint, data, actionCreator, method) => (dispatch) => {
    const token = localStorage.getItem('user');
    axiosInstance.defaults.headers.common.Authorization = 'Bearer '.concat(token);
    return axiosInstance[method](endpoint, data).then((response) => {
        console.log(response)
        dispatch(actionCreator(response.data));
    }).catch(err => dispatch(errorOccurred(err)));
};


export { getDataThunk, postDataThunk, axiosInstance };