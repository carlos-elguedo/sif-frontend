import React, { Component } from 'react';
import { access } from '../../api';
import Dropdown from 'emerald-ui/lib/Dropdown';
import Button from 'emerald-ui/lib/Button';
import styled from 'styled-components';

/**
 * Class NavBar
 * Header of the application
 * receives as parameter the text to be displayed in the upper bar
 * It contains a link to the Home page ('/')
 * @author Carlos Elguedo
 * @version 0.0.1
 */

const StyleDropdown = styled(Dropdown)`
  background-color: white;
`;

class NavBar extends Component {
  async closeSession() {
    await access
      .logout()
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log('error in logout: ', error);
      })
      .finally(() => {
        document.location.href = '/';
      });
  }

  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <a href="#menu-toggle" id="menu-toggle" className="navbar-brand">
          <span className="navbar-toggler-icon"></span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample02"
          aria-controls="navbarsExample02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href={this.props.route}>
                {this.props.nav_title}
                <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>

          <StyleDropdown fromRight>
            <Button>
              Acciones
              <span className="caret" />
            </Button>
            <Dropdown.Menu>
              <Dropdown.Item>Mi perfil</Dropdown.Item>
              <Dropdown.Item separator />
              <Dropdown.Item onClick={this.closeSession}>
                Cerrar sesión
              </Dropdown.Item>
            </Dropdown.Menu>
          </StyleDropdown>
        </div>
      </nav>
    );
  }
}

export default NavBar;
