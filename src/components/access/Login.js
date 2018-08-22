import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Login extends Component {
    render() {
      return (
        <div className="card hoverable">
          <div className="card-header">
            <p className="card-title center-align"><b>Bienvenido a SIF</b></p>
          </div>
          <div id="pageLogin" className="card-content center-align">
            <p>Ingresa con tus datos</p>
            <form>
            <div className="row">
              <div className="input-field col s12">
                <label className="black-text">Correo o teléfono</label>
              </div>
                      
              <div className="input-field col s12">
                <input type="text"/>
              </div>
                                    
              <div className="input-field col s12">
                <label className="black-text">Contraseña</label>
              </div>
                      
              <div className="input-field col s12">
                <input type="password"/>
              </div>
                                    
              <div className="input-field col s12">
                <a className="left orange-text" href="#">Olvide mi contraseña</a>
              </div>
                    
            </div>
            
            <div className="card-action">
            <Link to={`/home`}>
              <a id="bot_login" className="btn orange" href="#">Acceder</a>
            </Link>
              <a id="bot_go_register" className="btn grey waves-effect" href="#">Registrarse</a>
            </div>
          </form>
        </div>







        <div id="pageRegister" className="card-content center-align hide">
          <p>Registrate</p>
          <form>
            <div className="row">
              
              <div className="input-field col s12">
                <label className="black-text">Nombre</label>
              </div>
                      
              <div className="input-field col s12">
                <input type="text"/>
              </div>

              <div className="input-field col s12">
                <label className="black-text">Correo</label>
              </div>
                      
              <div className="input-field col s12">
                <input type="text"/>
              </div>
                                    
              <div className="input-field col s12">
                <label className="black-text">Contraseña</label>
              </div>
                      
              <div className="input-field col s12">
                <input type="password"/>
              </div>

              <div className="input-field col s12">
                <label className="black-text">Fecha de nacimiento</label>
              </div>
                      
              <div className="input-field col s12">
                <input type="date"/>
              </div>

              <div className="input-field col s12">
                <label className="black-text">
                  <input type="checkbox"/>
                  Acepto los terminos
                </label>
              </div>
                      
              

            </div>
            
            <div className="card-action">
              <a id="bot_login" className="btn orange" href="#">Acceder</a>
              <a id="bot_go_back" className="btn grey waves-effect" href="#">Registrarse</a>
            </div>
          </form>
        </div>


      </div>
      );
    }
  }
  
  export default Login;
  