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

var userOption = ['Inicio', 'Mi perfil', 'Buscar un trabajador','Mensajes']

class Client extends Component {


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

  export default Client;
