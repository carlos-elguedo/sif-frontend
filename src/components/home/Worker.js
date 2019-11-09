import React, { Component } from 'react';
import NavBar from '../sections/NavBar'
import SideBar from '../sections/SideBar'
import ProfileWork from '../user/ProfileWork/'
import EditProfileWork from '../user/EditProfileWork/'
// import Inbox from '../user/Inbox'
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
// import { worker } from '../../api';


import { WORKER_ROUTES } from '../../constants';

// const config = require('../../config')


var userOption = ['Inicio', 'Mi perfil', 'Buscar un trabajador','Mensajes']

class Worker extends Component {

  componentDidMount() {
    const { fetchWorker } = this.props
    fetchWorker()
  }

    render() {
      const { data: current_worker } = this.props
      //console.log('current_worker',current_worker)

      return (
        <div className="App">
        <NavBar nav_title = {`SIF - ${current_worker.name}`}/>
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
