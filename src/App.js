import 'emerald-ui/lib/styles.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Components created
import Access from './components/access/Access'
import Client from './components/home/Client'
import Worker from './components/home/Worker.container'
// import NotFound from './components/notFound'

import { WORKER_ROUTES } from './constants';


class App extends Component {

  constructor(){
    super();
    this.state = {
      userType : 0
    };
  }


  render() {


    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Access}/>
          <Route path='/client'  component={Client}/>
          <Route path={WORKER_ROUTES.root}  component={Worker}/>
          <Route path={WORKER_ROUTES.edit} exact component={Worker}/>
        </Switch>
      </Router>
      // <Routes/>
    );
  }
}

export default App;
