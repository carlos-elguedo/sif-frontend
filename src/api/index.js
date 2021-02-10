import axios from 'axios';
import * as access from './access';
import * as client from './client';
import * as worker from './worker';
import * as utils from './utils';
import * as message from './message';
import { apolloClient } from './apolloClient';

const config = require('../config');

export { access, client, worker, utils, message };

export const sifRequestInstance = axios.create({
  baseURL: config.SERVER_URL,
  withCredentials: true
});

export const sifGraphqlInstance = apolloClient(`${config.SERVER_URL}graphql`);
