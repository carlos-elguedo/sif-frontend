import React, { Component } from 'react';
//import { Link } from "react-router-dom";


class FormLogin extends Component {
    render() {
      return (
		<div id="pageLogin" className="wrap-login100 p-l-55 p-r-55 p-t-25 p-b-54">
			<form className="login100-form validate-form" onSubmit={this.props.login}>
		  		<span className="login100-form-title p-b-49">
					SIF
		  		</span>

		  		<div className="wrap-input100 validate-input m-b-23" data-validate = "completa este campo">
					<span className="label-input100">Correo o telefono</span>
					<input className="input100" type="text" name="login_data" placeholder="ej: nombre@mail.com" onChange={this.props.typing}/>
					<span className="focus-input100" data-symbol="&#xf206;"></span>
		  		</div>

		  		<div className="wrap-input100 validate-input" data-validate="completa este campo">
					<span className="label-input100">Contraseña</span>
					<input className="input100" type="password" name="login_password" placeholder="Escribe aquí" onChange={this.props.typing}/>
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
			  			{/*<Link to={`/home`}>*/}
							
							<button type="submit" className="login100-form-btn" id="bot_login">
					  			Entrar
							</button>
			  			{/*</Link>*/}
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
      );
    }
  }
  
  export default FormLogin;
  