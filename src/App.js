import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Access from './components/access/Access'
// import Home from './components/home/Home'
import Client from './components/home/Client'
import Worker from './components/home/Worker'

// import Routes from './router'


//import NotFound from './components/notFound'

//const init = require('./utils/init')


class App extends Component {

  constructor(){
    super();
    this.state = {
      userType : 0
    };
    this.isLogged = this.isLogged.bind(this);

  }

isLogged() {

  /*
    const isLogged = init.isLogged();
    //console.log("Llego: " + isLogged);
    if(isLogged){
      return <Access/>;
    }else{
      return <NotFound/>;
    }
    */
   return <Access userType = {this.state.userType}/>;
  }



  render() {


    return (
      <Router>
        <Switch>
          <Route path='/' exact component={this.isLogged}/>
          <Route path='/client' exact component={Client}/>
          <Route path='/worker' exact component={Worker}/>
        </Switch>
      </Router>
      // <Routes/>
    );
  }
}

export default App;
