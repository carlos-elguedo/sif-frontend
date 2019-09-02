import { sifRequestInstance } from './';

const config = require('../config')

export const login = (data) => {
  // console.log('Hay: ', sifRequestInstance.arguments)
  return sifRequestInstance.post(`/${config.SERVER_API_ACCES_URL}`, data)
}

export const logout = (data) => {
  // console.log('Hay: ', sifRequestInstance.arguments)
  return sifRequestInstance.post(`/${config.SERVER_API_ACCES_URL}signup/`, data)
}

