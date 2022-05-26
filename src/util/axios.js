import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: 'http://54.90.236.103/api'


});

export default axiosConfig