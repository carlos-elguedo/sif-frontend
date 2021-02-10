import { sifRequestInstance } from './';

const config = require('../config');

export const getInbox = () => {
  return sifRequestInstance.get(`/${config.SERVER_API_MESSAGE}`);
};

export const getMessages = idRelation => {
  return sifRequestInstance.get(`/${config.SERVER_API_MESSAGE}/all`, {
    params: { inbox: idRelation }
  });
};
