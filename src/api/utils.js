import { sifRequestInstance } from './';

export const uploadFile = (url, data) => {
  let payload = new FormData();
  payload.append('file', data[0]);

  return sifRequestInstance.post(`/${url}`, payload);
};
