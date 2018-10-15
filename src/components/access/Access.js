import React, { Component } from 'react';
import { Link } from "react-router-dom";


import FormLogin from './FormLogin'
import FormRegister from './FormRegister'
import ModalMessage from './ModalMessage'

//import NotFound from '../notFound'



class Access extends Component {
  constructor(){
    super();

    this.state={

      login_data: '',
      login_password: '',
      register_name: '',
      register_data_register: '',
      register_password: '',
      register_age: '',
      register_type: '',
      counter_user_type: 2,
      message_request: 'Enviando información',
      message_request_option: 'Cancelar',
      sending_request: false,
      user_request: []


  };


    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.userType = this.userType.bind(this);
    this.cancelSend = this.cancelSend.bind(this);
    this.changeRegister = this.changeRegister.bind(this);
  }





  /**
   * Funcion para enviar el formulario de login al servidor
   * @param {*} eve 
   */
  login(eve){
    eve.preventDefault();

    //Para mostrar el mensaje de enviando datos
    this.setState({
      sending_request: true
    });

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
      
      this.setState({
        message_request: data.message
      });
      if(data.type_error == -1){
        console.log(data.user)
        this.setState({
          message_request_option: 'Aceptar',
          user_request: data.user
        });
      }

  })
  .catch(err => console.error(err));
  }



  /**
   * Funcion para enviar el formulario de registro al servidor
   */
  register(eve){
    eve.preventDefault();

    //Para mostrar el mensaje de enviando datos
    this.setState({
      sending_request: true
    });

    
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
      
      this.setState({
        message_request: data.message
      });
      if(data.type_error == -1){
        this.setState({
          message_request_option: 'Aceptar'
        });
      }

  })
  .catch(err => console.error(err));
  }




  /**
   * Funcion para controlar las pulsasiones sobre el teclado
   * @param {*} eve 
   */
  changeRegister(eve){
    console.log(eve.target.name + ": " +eve.target.value);
    const {name, value} = eve.target;

    this.setState({
        [name]: value
    });
  }





  /**
   * Funcion para gestionar el tipo de usuario a registrar
   */
  userType(){
    console.log("Cambio")
    if(this.state.counter_user_type % 2 == 0){
      this.setState({
        register_type: 2
      });

  }else{
      this.setState({
        register_type: 1
      });
  }
  this.setState({
    counter_user_type: this.counter_user_type+1
  });
  }




/**
 * Funcion para cancelar el envio de un formulario al servidor
 */
  cancelSend(){
    console.log("Cancelo envio " + this.state.user_request.register_name)
    
    
    this.setState({
      sending_request: false
    });


  }


  render() {
    return (
          
      <div className="limiter">
        <div className="container-login100">
          <ModalMessage visibility={this.state.sending_request} message={this.state.message_request} cancel = {this.cancelSend} boton_text={this.state.message_request_option}/>
          <FormLogin login={this.login} typing= {this.changeRegister}/>
          <FormRegister register={this.register} typing= {this.changeRegister} userType={this.userType}/>
        </div>
      </div>
    );
  }
}

export default Access;
