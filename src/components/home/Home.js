import React, { Component } from 'react';

import Client from './Client';


class Home extends Component {
    render() {
      return (
        <div className="fondo_2">
            <p>{this.props.pala}</p>
            <Client/>
                
        </div>
      );
    }
  }
  
  export default Home;
  