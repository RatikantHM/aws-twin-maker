import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://mzhal3hl8f.execute-api.us-east-1.amazonaws.com',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
})

export default axiosInstance;
