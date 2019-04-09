import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cs-dsm.firebaseio.com/'
});


export default instance;