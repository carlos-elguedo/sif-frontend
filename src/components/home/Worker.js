import React, { Component } from 'react';
import NavBar from '../sections/NavBar';
import SideBar from '../sections/SideBar';
import ProfileWork from '../user/ProfileWork/';
import EditProfileWork from '../user/EditProfileWork/';
import { Route, Switch } from 'react-router-dom';
import Messages from '../messages/Messages';
import Chat from '../messages/Chat';
import { WORKER_ROUTES, userWorkerOption } from '../../constants';

class Worker extends Component {
  componentDidMount() {
    const { fetchWorker } = this.props;
    fetchWorker();
  }

  render() {
    const { data: current_worker } = this.props;

    return (
      <div className="App">
        <NavBar
          route="worker"
          nav_title={`SIF - ${
            current_worker.firstName || current_worker.name || ''
          }`}
        />
        <SideBar options={userWorkerOption} route="worker" />
        <Switch>
          <Route exact path={WORKER_ROUTES.root} component={ProfileWork} />
          <Route exact path={WORKER_ROUTES.edit} component={EditProfileWork} />
          <Route exact path={WORKER_ROUTES.messages} component={Messages} />
          <Route exact path={WORKER_ROUTES.chat} component={Chat} />
        </Switch>
      </div>
    );
  }
}

export default Worker;
