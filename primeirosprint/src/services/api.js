import axios from 'axios';

export default axios.create({
    baseURL: 'https://tasty-tick-jeans.cyclic.app/',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});