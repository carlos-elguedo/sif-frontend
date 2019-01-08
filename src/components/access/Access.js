import React, { Component } from 'react';
//import { Link } from "react-router-dom";


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
      message_request: '',
      message_request_option: 'Cancelar',
      sending_request: false,
      user_request: []


  };


    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
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
      message_request: 'Enviando...',
      sending_request: true
    });

    //Enviamos la solicitud de inicio de sesion al servidor 
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
      
      //Ajustamos las variables locales a las recibidas por el servidor
      this.setState({
        message_request: data.message,
        message_request_option: data.option
      });


      if(data.type_error === -1){
        this.setState({
          message_request_option: 'Aceptar'
        });
        this.props.userType = data.register_type;
      }

  })
  .catch(err => {
    this.setState({
      message_request: 'Error al realizar la petición',
      sending_request: true,
      message_request_option: 'Cerrar'
    });    
    console.error(err) 
});
  }







  /**
   * Funcion para enviar el formulario de registro al servidor
   */
  register(eve){
    eve.preventDefault();

    // Para mostrar el mensaje de enviando datos
    this.setState({
      message_request: 'Enviando...',
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
        message_request: data.message,
        message_request_option: data.option
      });

      if(data.type_error === -1){
        this.setState({
          message_request_option: 'Aceptar'
        });
      }

  })
  .catch(err => {
      this.setState({
        message_request: 'Error al realizar la petición',
        sending_request: true,
        message_request_option: 'Cerrar'
      });    
      console.error(err) 
  });
  }




  /**
   * Funcion para controlar las pulsasiones sobre el teclado
   * @param {*} eve 
   */
  changeRegister(eve){
    // console.log(eve.target.name + ": " +eve.target.value);
    const {name, value} = eve.target;

    this.setState({
        [name]: value
    });
  }


/**
 * Funcion para cancelar el envio de un formulario al servidor
 */
  cancelSend(){
    console.log("Cancelo")
    this.setState({
      sending_request: false,
      message_request: '',
      message_request_option: 'Cancelar'
    });


  }


  render() {
    return (
      <main className="container p-5">
          {<ModalMessage visibility={this.state.sending_request} message={this.state.message_request} cancel = {this.cancelSend} boton_text={this.state.message_request_option}/>}}
          <FormLogin login={this.login} typing = {this.changeRegister}/>
          <FormRegister register={this.register} typing= {this.changeRegister}/>

      </main>
    );
  }
}

export default Access;
