import React, { Component } from 'react';
import { Link } from "react-router-dom";


import FormLogin from './FormLogin'
import FormRegister from './FormRegister'
//import NotFound from '../notFound'



class Access extends Component {
  constructor(){
    super();
   
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }




  login(eve){
    eve.preventDefault();
    console.log("Va a loguearser");
  }


  register(eve){
    eve.preventDefault();
    console.log("Va a registrarse");
  }


  render() {
    return (    
      <div className="limiter">
        <div className="container-login100">
          <FormLogin login={this.login}/>
          <FormRegister register={this.register}/>
        </div>
      </div>
    );
  }
}

export default Access;
