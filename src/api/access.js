import { sifRequestInstance } from './';

const config = require('../config')

export const login = async (data) => {
  // console.log('Hay: ', sifRequestInstance.arguments)
  return await sifRequestInstance.post(`/${config.SERVER_API_ACCES_URL}`, data)
}

export const register = async (data) => {
  // console.log('Hay: ', sifRequestInstance.arguments)
  return await sifRequestInstance.post(`/${config.SERVER_API_ACCES_URL}signup/`, data)
}

