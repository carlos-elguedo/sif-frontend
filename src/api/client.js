import { sifRequestInstance } from './';

const config = require('../config');

/* export const saveProfileChanges = data => {
  return sifRequestInstance.put(`/${config.SERVER_API_WORKER_URL}update`, data);
}; */

export const getClient = () => {
  return sifRequestInstance.get(`/${config.SERVER_API_CLIENT_URL}`);
};

export const getWorkerToView = async idWorker => {
  return sifRequestInstance.get(`/${config.SERVER_API_WORKER_URL}view`, {
    params: { id: idWorker }
  });
};

export const saveProfileChanges = data => {
  return sifRequestInstance.put(`/${config.SERVER_API_CLIENT_URL}update`, data);
};

export const sendMessage = async (message, idWorker) => {
  return sifRequestInstance.post(`/${config.SERVER_API_MESSAGE}`, {
    idWorker,
    message
  });
};
