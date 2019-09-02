import axios from 'axios';
import * as access from './access';
import * as client from './client';
import * as worker from './worker';

const config = require('../config')

export {
    access,
    client,
    worker
};

export const sifRequestInstance = axios.create({
  baseURL: config.SERVER_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true'
  }
});
