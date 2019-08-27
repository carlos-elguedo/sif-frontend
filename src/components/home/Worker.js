import React, { Component } from 'react';
import NavBar from '../sections/NavBar'
import SideBar from '../sections/SideBar'
import ProfileWork from '../user/ProfileWork/'
import EditProfileWork from '../user/EditProfileWork'
// import Inbox from '../user/Inbox'
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
// import Redirect from 'react-router-dom/Redirect';


import { WORKER_ROUTES } from '../../constants';
import { readCookie } from '../../utils/cookie';

// const axios = require('axios');
const config = require('../../config')




var userOption = ['Inicio', 'Mi perfil', 'Buscar un trabajador','Mensajes']

class Worker extends Component {

  componentDidMount() {
    // const transport = axios.create({
    //   withCredentials: true
    // })

    // axios.get(
    //   `${config.SERVER_URL}${config.SERVER_API_UTILS_URL}userIsLogged`,
    //   {
    //     withCredentials: true
    //     // headers: {
    //     //   cookie: req.headers.cookie
    //     // }
    //   })
    // .then(function (response) {
    //   console.log('Vino response: ', response);
    // })
    // .catch(function (error) {
    //   console.log('Viono error: ', error);
    // });

    console.log('Cookies: ', readCookie())
    fetch(`${config.SERVER_URL}${config.SERVER_API_UTILS_URL}userIsLogged`,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
            // 'Cookie': "connect.sid=s%3AZQLe59o597NIKTBaoGOTlywRuYSBWazP.jVkVPLWa6ge5YQWLmFgt3BlHVIERSmQGBiAjWtPO%2BeM",
            // 'Connection': 'keep-alive'
        }
      })
      .then(res => res.json())
      .then(data => {
        console.lo(data)
      })
    }

    render() {
      return (
        <div className="App">
        <NavBar nav_title = " User Name worker"/>
        <SideBar options = {userOption}/>
        <Switch>
          <Route exact path={WORKER_ROUTES.root} component={ProfileWork} />
          <Route exact path={WORKER_ROUTES.edit} component={EditProfileWork} />
        </Switch>
      </div>
      );
    }
  }

  export default Worker;
