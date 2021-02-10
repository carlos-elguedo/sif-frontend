import 'emerald-ui/lib/styles.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Components created
import Access from './components/access/Access';
import Client from './components/home/Client.container';
import Worker from './components/home/Worker.container';

import { WORKER_ROUTES, CLIENT_ROUTES } from './constants';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Access} />
          <Route path={[CLIENT_ROUTES.root, `${CLIENT_ROUTES.view}:id`]} component={Client} />
          <Route path={[WORKER_ROUTES.edit, WORKER_ROUTES.root, WORKER_ROUTES.messages, WORKER_ROUTES.chat]} exact component={Worker} />
        </Switch>
      </Router>
    );
  }
}

export default App;
