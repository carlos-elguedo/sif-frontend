import axios from 'axios';

const config = require('../config')

export const logout = () =>
  axios.post(`url`, {
  });

export const login = () => {
  const cookie = {
    
  };
  return axios.post(`url`, cookie);
};
