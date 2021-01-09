import Cookies from 'universal-cookie';

const cookie = JSON.parse('{"api": "connect.sid"}');
const cookies = new Cookies();

const readCookie = () =>{
    return cookies.get(cookie.api, );
} 


export { readCookie };
