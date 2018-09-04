import React, { Component } from 'react';
import { Link } from "react-router-dom";


import FormLogin from './FormLogin'
import FormRegister from './FormRegister'
//import NotFound from '../notFound'



class Access extends Component {
  constructor(){
    super();

    this.state={

      login_name: '',
      login_password: '',
      register_name: '',
      register_date_register: '',
      register_password: '',
      register_age: ''


  };


    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.changeRegister = this.changeRegister.bind(this);
  }




  login(eve){
    eve.preventDefault();
    console.log("Va a loguearser");

    fetch('http://localhost:3001/api/rest/access/',{
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
  })
  .then(res => res.json())
  .then(data => {
      console.log(data);
  })
  .catch(err => console.error(err));
  }


  register(eve){
    eve.preventDefault();
    console.log("Va a registrarse");
    
    fetch('http://localhost:3001/api/rest/access/signup/',{
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
  })
  .then(res => res.json())
  .then(data => {
      console.log(data);
  })
  .catch(err => console.error(err));
  
  //console.log(JSON.stringify(eve));
  }

  changeRegister(eve){
    console.log(eve.target.name + ": " +eve.target.value);
    const {name, value} = eve.target;

    this.setState({
        [name]: value
    });
  }


  render() {
    return (    
      <div className="limiter">
        <div className="container-login100">
          <FormLogin login={this.login} typing= {this.changeRegister}/>
          <FormRegister register={this.register} typing= {this.changeRegister}/>
        </div>
      </div>
    );
  }
}

export default Access;
