import React, { Component } from 'react';
//import { Link } from "react-router-dom";


import FormLogin from './FormLogin'
import FormRegister from './FormRegister'
import ModalMessage from '../sections/ModalMessage'
import Alert from '../info/Alert'

//import NotFound from '../notFound'
import {validate_login, validate_register} from '../../utils/validator'

/**Global configurations file*/
const config = require('../../config.js')



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
      register_type: 1,
      register_terms: 0,
      message_request: '',
      message_request_option: 'Cancelar',
      sending_request: false,
      user_request: [],
      text_alert : '',
      show_alert : false


  };


    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.cancelSend = this.cancelSend.bind(this);
    this.changeRegister = this.changeRegister.bind(this);
    this.close_alert = this.close_alert.bind(this);
  }





  /**
   * Funcion para enviar el formulario de login al servidor
   * @param {*} eve
   */
  login(eve){
    eve.preventDefault();

    if(validate_login(this.state)){
      //Para mostrar el mensaje de enviando datos
      this.setState({
        message_request: 'Enviando...',
        sending_request: true
      });

      //Enviamos la solicitud de inicio de sesion al servidor
      fetch(`${config.SERVER_URL}${config.SERVER_API_ACCES_URL}`,{
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
        }
      })
      .then(res => res.json())
      .then(data => {

        //Ajustamos las variables locales a las recibidas por el servidor
        this.setState({
          message_request: `${data.message}`,
          message_request_option: data.option
        });

        if(data.type_error === -1){
          //Login exitoso
          document.location = data.redirect
          // console.log(data.redirect)

        }

      })
      .catch(err => {
        this.setState({
          message_request: 'Error al realizar la petición : Login',
          sending_request: true,
          message_request_option: 'Cerrar'
        });
        console.error(err)
      });
    }//End of validator function
    else{
      console.log('Datros malos..........................')
      this.setState({
        text_alert: 'Por favor revisa tus datos',
        show_alert: true
      })
    }

  }//End of login function







  /**
   * Funcion para enviar el formulario de registro al servidor
   */
  register(eve){
    eve.preventDefault();

    if(validate_register(this.state)){
      // Para mostrar el mensaje de enviando datos
      this.setState({
        message_request: 'Enviando...',
        sending_request: true
      });


      fetch(`${config.SERVER_URL}${config.SERVER_API_ACCES_URL}signup/`,{
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
              //Registro exitoso
              document.location = data.redirect
          }

      })
      .catch(err => {
          this.setState({
            message_request: 'Error al realizar la petición: Register',
            sending_request: true,
            message_request_option: 'Cerrar'
          });
          console.error(err)
      });
    }else{
      console.log('Datros malos register..........................')
      this.setState({
        text_alert: 'Por favor revisa tus datos',
        show_alert: true
      })
    }

  }//End of register function




  /**
   * Funcion para controlar las pulsasiones sobre el teclado
   * @param {*} eve
   */
  changeRegister(eve){
    // console.log(eve.target.name + ": " +eve.target.value + ": " + eve.target.type);
    const {name, value, type} = eve.target;

    //To checkbox input
    if(type === 'checkbox'){
      if(this.state.register_terms === 0){
        this.setState({
          register_terms: 1
        });
        // console.log('Cambio a 1 ------------:', this.state.register_terms)
      }else{
        this.setState({
          register_terms: 0
        });
        // console.log('Cambio a 0---------------:', this.state.register_terms)
      }

    }else{
      //Other fields of input
      this.setState({
        [name]: value
      });
    }

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

  close_alert(eve){
    eve.preventDefault()
    console.log('close alert')
    this.setState({
      text_alert: '',
      show_alert: false
    })
  }



  render() {
    return (
      <div className = 'initial-page'>
        <main className="container p-5">
            <Alert text_alert = {this.state.text_alert} show = {this.state.show_alert} close = {this.close_alert}/>
            {/* <Alert text_alert = {this.state.text_alert} show = {this.state.show_alert}/> */}
            {<ModalMessage visibility={this.state.sending_request} message={this.state.message_request} cancel = {this.cancelSend} boton_text={this.state.message_request_option}/>}
            <FormLogin login={this.login} typing = {this.changeRegister}/>
            <FormRegister register={this.register} typing= {this.changeRegister}/>

        </main>
      </div>
    );
  }


}

export default Access;
