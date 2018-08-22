import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login'

import NotFound from '../notFound'
//import logo from './logo.svg';


class Access extends Component {
  render() {
    return (
      <div className="fondo">
        <div className="container">
          <div className="row">
            <div className="col s12 m12">
            
                <Login/>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Access;
