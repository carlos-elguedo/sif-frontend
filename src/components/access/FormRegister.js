import React, { Component } from 'react';
//import { Link } from "react-router-dom";


class FormRegister extends Component {


    render() {
      return (
        <div id="pageRegister" className="wrap-login100 p-l-55 p-r-55 p-t-25 p-b-54 hide">
            <form className="login100-form validate-form"  onSubmit={this.props.register}>
                <span className="login100-form-title p-b-49">
                    Registro
                </span>
        
                <div className="wrap-input100 validate-input m-b-23" data-validate = "completa este campo">
                    <select id="tipo_usuario" className="form-control" onChange={this.props.userType}>
                        <option>Soy un cliente</option>
                        <option>Soy un Trabajador independiente</option>
                    </select>
                </div>
    
        
                <div className="wrap-input100 validate-input m-b-23" data-validate = "completa este campo">
                    <span className="label-input100">Nombre</span>
                    <input className="input100" type="text" name="register_name" placeholder="Tu nombre por favor" onChange={this.props.typing}/>
                    <span className="focus-input100" data-symbol="&#xf206;"></span>
                </div>
    
    
                <div className="wrap-input100 validate-input m-b-23" data-validate = "completa este campo">
                    <select id="tipo_registro" className="form-control">
                        <option>Registrarme con correo electronico</option>
                        <option>Registrarme con numero telefonico</option>
                    </select>
                </div>
    
                <div className="wrap-input100 validate-input m-b-23" data-validate = "completa este campo">
                    <span id="dato_registro_texto" className="label-input100">Correo electronico</span>
                    <input id="dato_registro" className="input100" type="mail" name="register_data_register" placeholder="ej: nombre@mail.com" onChange={this.props.typing}/>
                    <span className="focus-input100" data-symbol="&#xf206;"></span>
                </div>
    
                <div className="wrap-input100 validate-input" data-validate="completa este campo">
                    <span className="label-input100">Contraseña</span>
                    <input className="input100" type="password" name="register_password" placeholder="Escribe aquí" onChange={this.props.typing}/>
                    <span className="focus-input100" data-symbol="&#xf190;"></span>
                </div>
    
                <div className="wrap-input100 validate-input p-b-30" data-validate="completa este campo">
                    <span className="label-input100">Fecha de nacimiento</span>
                    <input className="input100" type="date" name="register_age" onChange={this.props.typing}/>
                    <span className="focus-input100" data-symbol="&#xf190;"></span>
                </div>
        
                <div className="wrap-input100 validate-input p-b-30 for-check" data-validate="Acepta los terminos">
                    <input id="aceptar_terminos" className="form-check-input" type="checkbox" value=""/>
                    <label htmlFor="aceptar_terminos" className="label-input100">Acepto las condiciones de uso</label>
                </div>
          
                <div className="container-login100-form-btn">
                    <div className="wrap-login100-form-btn">
                        <div className="login100-form-bgbtn"></div>
                        <button id="bot_register" className="login100-form-btn" type="submit">
                            Registrarme
                        </button>
                    </div>
                </div>
    
                <div className="txt1 text-center p-t-54 p-b-20">
                    <span>
                        O registrate con:
                    </span>
                </div>
    
                <div className="flex-c-m">
                    <a className="login100-social-item bg1">
                        <i className="fa fa-facebook"></i>
                    </a>
    
                    <a  className="login100-social-item bg2">
                        <i className="fa fa-twitter"></i>
                    </a>
    
                    <a  className="login100-social-item bg3">
                        <i className="fa fa-google"></i>
                    </a>
                </div>
    
                <div className="flex-col-c p-t-25">
                    <a id="bot_go_login" className="txt2">
                        Volver
                    </a>
                </div>
        
            </form>
        </div>
      );
    }
  }
  
  export default FormRegister;
  