import { sifRequestInstance } from './';

const config = require('../config')

export const userIsLogged = ()=>{
    return sifRequestInstance.get(`/${config.SERVER_API_ACCES_URL}info`);
}

export const saveProfileChanges = (data)=>{
    return sifRequestInstance.put(`/${config.SERVER_API_WORKER_URL}update`, data);
}
