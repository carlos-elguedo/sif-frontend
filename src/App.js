import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Components created
import Access from './components/access/Access'
import Client from './components/home/Client'
import Worker from './components/home/Worker'
// import NotFound from './components/notFound'


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
          <Route path='/client' exact component={Client}/>
          <Route path='/worker' exact component={Worker}/>
          <Route path='/worker/edit' exact component={Worker}/>
        </Switch>
      </Router>
      // <Routes/>
    );
  }
}

export default App;
