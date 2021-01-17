import React, { Component } from 'react';
import NavBar from '../sections/NavBar';
import SideBar from '../sections/SideBar';
import { Switch, Route } from 'react-router-dom';
import ProfileClient from '../user/ProfileClient';
import ViewProfileWork from '../user/ViewProfileWork';
import EditProfileClient from '../user/EditProfileClient';

import { CLIENT_ROUTES, userClientOption } from '../../constants';
class Client extends Component {
  componentDidMount() {
    const { fetchClient } = this.props;
    fetchClient();
  }

  render() {
    const { data: current_client } = this.props;
    return (
      <div className="App">
        <NavBar
          nav_title={`SIF - ${
            current_client.firstName || current_client.name || ''
          }`}
        />
        <SideBar options={userClientOption} />
        <Switch>
          <Route exact path={CLIENT_ROUTES.root} component={ProfileClient} />
          <Route exact path={CLIENT_ROUTES.view} component={ViewProfileWork} />
          <Route
            exact
            path={CLIENT_ROUTES.edit}
            component={EditProfileClient}
          />
        </Switch>
      </div>
    );
  }
}

export default Client;
