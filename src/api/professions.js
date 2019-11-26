import { sifRequestInstance } from './';

const config = require('../config')

export const getProfessions = ()=>{
    return sifRequestInstance.get(`/${config.SERVER_API_PROF_URL}all`);
}

export const getCategories = ()=>{
    return sifRequestInstance.get(`/${config.SERVER_API_PROF_URL}allcategory`);
}

//, {withCredentials: true}