import axios from 'axios';
const config = require('../config')
import * as access from './access';
import * as client from './client';
import * as worker from './worker';


export {
    access,
    client,
    worker
};

export const sifRequestInstance = axios.create({
  baseURL: config.SERVER_URL
});
