import React, { Component } from 'react';
import NavBar from '../sections/NavBar';
import SideBar from '../sections/SideBar';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import ProfileWork from '../user/ProfileClient';

import { CLIENT_ROUTES } from '../../constants';

var userOption = ['Inicio', 'Mi perfil', 'Buscar un trabajador', 'Mensajes'];
class Client extends Component {
  componentDidMount() {
    const { fetchClient } = this.props;
    fetchClient();
  }

  render() {
    const { data: current_client } = this.props;
    return (
      <div className="App">
        <NavBar nav_title={`SIF - ${current_client.firstName || current_client.name || ''}`} />
        <SideBar options={userOption} />
        <Switch>
          <Route exact path={CLIENT_ROUTES.root} component={ProfileWork} />
        </Switch>
      </div>
    );
  }
}

export default Client;
