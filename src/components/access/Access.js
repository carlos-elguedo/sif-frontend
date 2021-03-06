import React, { Component } from 'react';

import FormLogin from './FormLogin';
import FormRegister from './FormRegister';
import ModalMessage from '../sections/ModalMessage';
import Alert from '../info/Alert';

//import NotFound from '../notFound'
import { validate_login, validate_register } from '../../utils/validator';
import { access } from '../../api';
import { ALERT_TYPES } from '../../constants';

class Access extends Component {
  constructor() {
    super();

    this.state = {
      data_register: '',
      password: '',
      register_name: '',
      register_firstName: '',
      register_lastName: '',
      register_data_register: '',
      register_password: '',
      register_age: '',
      register_type: 1,
      register_terms: 0,
      register_using: 0, //0 Using email, 1 phone
      message_request: '',
      message_request_option: 'Cancelar',
      sending_request: false,
      user_request: [],
      text_alert: '',
      show_alert: false
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
  async login(eve) {
    eve.preventDefault();

    if (validate_login(this.state)) {
      //Para mostrar el mensaje de enviando datos
      this.setState({
        message_request: 'Enviando...',
        sending_request: true
      });
      let message_request,
        message_request_option = 'Cancelar',
        type_error,
        redirect;
      await access
        .login(this.state)
        .then(function (response) {
          message_request = response.data.message;
          message_request_option = response.data.option;
          type_error = response.data.type_error;
          redirect = response.data.redirect;
        })
        .catch(function (error) {
          console.log('error in login: ', error);
          this.setState({
            message_request:
              'Ha ocurrido un error, por favor intenta de nuevo :(',
            message_request_option: 'OK',
            show_alert: true
          });
        })
        .finally(() => {
          this.setState({
            message_request,
            message_request_option
          });
          if (type_error === -1) {
            //Login exitoso
            document.location = redirect;
          }
        });
    } else {
      this.setState({
        alert_type: ALERT_TYPES.danger,
        text_alert: 'Por favor revisa tus datos',
        show_alert: true
      });
    }
  } //End of login function

  /**
   * Funcion para enviar el formulario de registro al servidor
   */
  async register(eve) {
    eve.preventDefault();
    
    const resultValidation = validate_register(this.state);

    if (resultValidation.correct) {
      // Para mostrar el mensaje de enviando datos
      this.setState({
        message_request: 'Enviando...',
        sending_request: true
      });

      let gotError = false;
      let message_request = '',
        message_request_option = '',
        redirect = '',
        type_error = -1;

      await access
        .register(this.state)
        .then(function (response) {
          const { data } = response;
          type_error = data.type_error;
          if (type_error !== -1) {
            gotError = true;
          }
          message_request = data.message;
          message_request_option = data.option;
          redirect = data.redirect;
        })
        .catch(function (error) {
          console.log(error);
          gotError = true;
        })
        .finally(() => {
          if (gotError) {
            this.setState({
              message_request:
                'Ha ocurrido un error, por favor intenta de nuevo :(',
              message_request_option: 'OK',
              sending_request: true
            });
          } else {
            this.setState({
              message_request,
              message_request_option
            });
            document.location = redirect;
          }
        });
    } else {
      this.setState({
        alert_type: ALERT_TYPES.danger,
        text_alert: resultValidation.message_es,
        show_alert: true
      });
    }
  } //End of register function

  /**
   * Funcion para controlar las pulsasiones sobre el teclado
   * @param {*} eve
   */
  changeRegister(eve) {
    const { name, value, type } = eve.target;

    //To checkbox input
    if (type === 'checkbox') {
      if (this.state.register_terms === 0) {
        this.setState({
          register_terms: 1
        });
      } else {
        this.setState({
          register_terms: 0
        });
      }
    } else {
      //Other fields of input
      this.setState({
        [name]: value
      });
    }
  }

  /**
   * Funcion para cancelar el envio de un formulario al servidor
   */
  cancelSend() {
    this.setState({
      sending_request: false,
      message_request: '',
      message_request_option: 'Cancelar'
    });
  }

  close_alert(eve) {
    eve.preventDefault();
    this.setState({
      alert_type: '',
      text_alert: '',
      show_alert: false
    });
  }

  render() {
    return (
      <div className="initial-page">
        <main className="container p-5">
          <Alert
            type={this.state.alert_type}
            text_alert={this.state.text_alert}
            show={this.state.show_alert}
            close={this.close_alert}
          />
          {/* <Alert text_alert = {this.state.text_alert} show = {this.state.show_alert}/> */}
          {
            <ModalMessage
              visibility={this.state.sending_request}
              message={this.state.message_request}
              cancel={this.cancelSend}
              boton_text={this.state.message_request_option}
            />
          }
          <FormLogin login={this.login} typing={this.changeRegister} />
          <FormRegister register={this.register} typing={this.changeRegister} />
        </main>
      </div>
    );
  }
}

export default Access;
