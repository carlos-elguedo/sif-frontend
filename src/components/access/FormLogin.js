import React, { Component } from 'react';

class FormLogin extends Component {
  render() {
    return (
      <div className="row" id="pageLogin">
        <div className="col-md-8 mx-auto">
          <div className="card mt-8 text-center">
            <div className="card-header">
              <h1 className="h4">Ingresar a tu cuenta</h1>
            </div>
            <img
              className="mx-auto d-block logo s-4"
              src="assets/images/sif72.png"
              alt="Logo SIF"
            />
            <div className="card-body">
              <form onSubmit={this.props.login}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="data_register"
                    placeholder="Correo electronico o numero tel."
                    onChange={this.props.typing}
                    autoFocus
                    autoComplete="username"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    onChange={this.props.typing}
                    autoComplete="current-password"
                  />
                </div>
                <div className="form-group text-right">
                  <a href="lol">¿Olvidó su contraseña?</a>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Entrar a SIF
                </button>
                <br />
                <div className="form-group">
                  <button
                    id="bot_go_register"
                    className="btn btn-secundary btn-block"
                  >
                    Registrarme
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormLogin;
