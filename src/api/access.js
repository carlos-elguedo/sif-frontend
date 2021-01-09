import { sifRequestInstance } from './';

const config = require('../config')

export const login = async (data) => {
  return await sifRequestInstance.post(`/${config.SERVER_API_ACCES_URL}`, data)
}

export const register = async (data) => {
  return await sifRequestInstance.post(`/${config.SERVER_API_ACCES_URL}signup/`, data)
}

export const logout = async () => {
  return await sifRequestInstance.get(`/${config.SERVER_API_ACCES_URL}logout/`)
}

export const userIsLogged = ( )=> {
  return sifRequestInstance.get(`/${config.SERVER_API_ACCES_URL}info`);
}