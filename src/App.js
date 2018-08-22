import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Access from './components/access/Access'
import Home from './components/home/Home'
import NotFound from './components/notFound'
import init from './utils/init'


class App extends Component {

  constructor(){
    super();
    this.isLogged = this.isLogged.bind(this);

    
  }
  
isLogged() {

  
    const isLogged = init.isLogged();
    console.log("Llego: " + isLogged);
    if(isLogged){
      return <Access/>;
    }else{
      return <NotFound/>;
    }
  }
  


  render() {


    return (
      <Router>
        <Switch>
          <Route path='/' exact component={this.isLogged}/>
          <Route path='/home' exact component={Home}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
