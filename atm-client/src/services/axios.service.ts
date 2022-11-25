import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://mzhal3hl8f.execute-api.us-east-1.amazonaws.com'
})

export default axiosInstance;
