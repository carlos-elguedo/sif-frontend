import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Access from './components/access/Access'
import NotFound from './components/notFound'
import init from './utils/init'


class App extends Component {

  constructor(){
    super();
    this.isLogged = this.isLogged.bind(this);

    
  }
  
isLogged() {

  
    const isLogged = init.isLogged();
    //console.log("Llego: " + isLogged);
    if(isLogged){
      return <Access/>;
    }else{
      return <NotFound/>;
    }
  }
  


  render() {


    return (
      <this.isLogged/>
          
    );
  }
}

export default App;
