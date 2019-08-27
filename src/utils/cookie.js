import Cookies from 'universal-cookie';

const cookie = JSON.parse('{"api": "connect.sid"}');
const cookies = new Cookies();

const readCookie = () =>{
    console.log('Va a buscar', cookie.api)
    return cookies.get(cookie.api, );
} 


export { readCookie };
