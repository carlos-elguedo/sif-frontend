import { sifRequestInstance } from './';

const config = require('../config')

export const saveProfileChanges = (data)=>{
    return sifRequestInstance.put(`/${config.SERVER_API_WORKER_URL}update`, data);
}

export const getWorker = () => {
    return sifRequestInstance.get(`/${config.SERVER_API_WORKER_URL}`);
}