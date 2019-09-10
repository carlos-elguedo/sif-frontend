import { sifRequestInstance } from './';

const config = require('../config')

export const userIsLogged = ()=>{
    return sifRequestInstance.get(`/${config.SERVER_API_ACCES_URL}info`);
}

//, {withCredentials: true}