import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Login extends Component {
    render() {
      return (
        <div className="limiter">
		      <div className="container-login100">
			      <div id="pageLogin" className="wrap-login100 p-l-55 p-r-55 p-t-25 p-b-54">
				      <form className="login100-form validate-form">
					      <span className="login100-form-title p-b-49">
						      SIF
					      </span>

					      <div className="wrap-input100 validate-input m-b-23" data-validate = "completa este campo">
						      <span className="label-input100">Correo o telefono</span>
						      <input className="input100" type="text" name="username" placeholder="ej: nombre@mail.com"/>
						      <span className="focus-input100" data-symbol="&#xf206;"></span>
					      </div>

					      <div className="wrap-input100 validate-input" data-validate="completa este campo">
						      <span className="label-input100">Contraseña</span>
						      <input className="input100" type="password" name="pass" placeholder="Escribe aquí"/>
						      <span className="focus-input100" data-symbol="&#xf190;"></span>
					      </div>
					
					      <div className="text-right p-t-8 p-b-31">
						      <a href="#">
							      ¿Olvidó su contraseña?
						      </a>
					      </div>
					
					      <div className="container-login100-form-btn">
						      <div className="wrap-login100-form-btn">
							      <div className="login100-form-bgbtn"></div>
                    <Link to={`/home`}>
                      <button id="bot_login" className="login100-form-btn">
                        Entrar
                      </button>
                    </Link>
						      </div>
					      </div>

					      <div className="txt1 text-center p-t-54 p-b-20">
						      <span>
							      Ingresa mediante:
						      </span>
					      </div>

					      <div className="flex-c-m">
						      <a href="#" className="login100-social-item bg1">
							      <i className="fa fa-facebook"></i>
						      </a>

						      <a href="#" className="login100-social-item bg2">
							      <i className="fa fa-twitter"></i>
						      </a>

						      <a href="#" className="login100-social-item bg3">
							      <i className="fa fa-google"></i>
						      </a>
					      </div>

					      <div className="flex-col-c p-t-25">
						      <span className="txt1 p-b-17">
							      O registrate en SIF
						      </span>

						      <a id="bot_go_register" href="#" className="txt2">
							      Registrarme
						      </a>
					      </div>
				      </form>
			      </div>






            {/*
              Formulario de registro
            */}








            <div id="pageRegister" className="wrap-login100 p-l-55 p-r-55 p-t-25 p-b-54 hide">
				<form className="login100-form validate-form">
					<span className="login100-form-title p-b-49">
						Registro
					</span>

					<div className="wrap-input100 validate-input m-b-23" data-validate = "completa este campo">
						<span className="label-input100">Eres un</span>
						<select id="tipo_usuario" className="form-control">
                    		<option>Cliente</option>
                    		<option>Trabajador independiente</option>
                  		</select>
					</div>


					<div className="wrap-input100 validate-input m-b-23" data-validate = "completa este campo">
						<span className="label-input100">Nombre</span>
						<input className="input100" type="text" name="username" placeholder="Tu nombre por favor"/>
						<span className="focus-input100" data-symbol="&#xf206;"></span>
					</div>


                	<div className="wrap-input100 validate-input m-b-23" data-validate = "completa este campo">
						<select id="tipo_registro" className="form-control">
                    		<option>Registrarme con correo electronico</option>
                    		<option>Registrarme con numero telefonico</option>
                  		</select>
					</div>

                	<div className="wrap-input100 validate-input m-b-23" data-validate = "completa este campo">
						<span className="label-input100">Correo electronico</span>
						<input className="input100" type="mail" name="username" placeholder="ej: nombre@mail.com"/>
						<span className="focus-input100" data-symbol="&#xf206;"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="completa este campo">
						<span className="label-input100">Contraseña</span>
						<input className="input100" type="password" name="pass" placeholder="Escribe aquí"/>
						<span className="focus-input100" data-symbol="&#xf190;"></span>
					</div>

                	<div className="wrap-input100 validate-input p-b-30" data-validate="completa este campo">
						<span className="label-input100">Fecha de nacimiento</span>
						<input className="input100" type="date" name="pass"/>
						<span className="focus-input100" data-symbol="&#xf190;"></span>
					</div>

					<div className="wrap-input100 validate-input p-b-30 for-check" data-validate="Acepta los terminos">
						<input id="aceptar_terminos" className="form-check-input" type="checkbox" value=""/>
						<label for="aceptar_terminos" className="form-check-label">Acepto las condiciones de uso</label>

					</div>
					
					
					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
                      		<button id="bot_login" className="login100-form-btn">
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
						<a href="#" className="login100-social-item bg1">
							<i className="fa fa-facebook"></i>
						</a>

						<a href="#" className="login100-social-item bg2">
							<i className="fa fa-twitter"></i>
						</a>

						<a href="#" className="login100-social-item bg3">
							<i className="fa fa-google"></i>
						</a>
					</div>

					<div className="flex-col-c p-t-25">
						<a id="bot_go_login" href="#" className="txt2">
							Volver
						</a>
					</div>
				
				</form>
			</div>



		</div>
	</div>
      );
    }
  }
  
  export default Login;
  