import React, { Component } from 'react';
//import { Link } from "react-router-dom";

class FormRegister extends Component {
  render() {
    return (
      <div className="row hide" id="pageRegister">
        <div className="col-md-8 mx-auto">
          <div className="card mt-8 text-center">
            <div className="card-header">
              <h1 className="h4">Registro</h1>
            </div>
            <img
              className="mx-auto d-block logo s-4"
              src="assets/images/sif72.png"
              alt="Logo SIF"
            />

            <div className="card-body">
              <form onSubmit={this.props.register}>
                {/* USER TYPE SELECT */}
                <div className="form-group">
                  <select
                    id="tipo_usuario"
                    name="register_type"
                    className="form-control"
                    onChange={this.props.typing}
                  >
                    <option value="1">Soy un cliente</option>
                    <option value="2">Soy un Trabajador independiente</option>
                  </select>
                </div>

                {/* NAME OF USER */}
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="register_firstName"
                    placeholder="Tu(s) nombre(s)"
                    onChange={this.props.typing}
                  />
                </div>

                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="register_lastName"
                    placeholder="Tu(s) apellido(s)"
                    onChange={this.props.typing}
                  />
                </div>

                {/* METHOD REGISTER SELECT */}
                <div className="form-group">
                  <select
                    id="tipo_registro"
                    name="register_using"
                    className="form-control"
                    onChange={this.props.typing}
                  >
                    <option value="0">
                      Registrarme con correo electronico
                    </option>
                    <option value="1">Registrarme con numero telefonico</option>
                  </select>
                </div>

                {/* USER DATA TO REGISTER */}
                <div className="form-group">
                  <input
                    id="dato_registro"
                    className="form-control"
                    type="text"
                    name="register_data_register"
                    placeholder="ej: nombre@mail.com"
                    onChange={this.props.typing}
                    autoComplete="username"
                  />
                </div>

                {/* PASSWORD OF USER */}
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    name="register_password"
                    placeholder="Contraseña"
                    onChange={this.props.typing}
                    autoComplete="current-password"
                  />
                </div>

                {/* DATE OF BIRTHDAY */}
                <div className="form-group text-left">
                  <span className="">Fecha de nacimiento</span>
                  <input
                    className="form-control"
                    type="date"
                    name="register_age"
                    onChange={this.props.typing}
                  />
                </div>

                {/* TERMINS ACCEPT */}
                <div className="form-group text-left">
                  <input
                    id="aceptar_terminos"
                    type="checkbox"
                    name="register_terms"
                    onChange={this.props.typing}
                  />{' '}
                  Acepto las condiciones de uso
                </div>

                {/* SEND FORM REGISTER */}
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    Registrarme
                  </button>
                </div>

                {/* BACK TO LOGIN */}
                <div className="form-group">
                  <a
                    id="bot_go_login"
                    className="btn btn-secundary btn-block"
                    href="lol"
                  >
                    Volver atras
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormRegister;
