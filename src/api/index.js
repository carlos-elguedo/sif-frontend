import axios from 'axios';
import * as access from './access';
import * as client from './client';
import * as worker from './worker';
import * as utils from './utils';

const config = require('../config')

export {
    access,
    client,
    worker,
    utils
};

export const sifRequestInstance = axios.create({
  baseURL: config.SERVER_URL,
  withCredentials: true
});

// ,
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Credentials': 'true',
//     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
//     'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With'
//   }