import React, {Component} from 'react';
// import { Link } from "react-router-dom";
// import DropdownUserMenu from './DropdownUserMenu'
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

 // <DropdownUserMenu/>
class NavBar extends Component{

    render(){
        return(
            <nav className="navbar navbar-expand navbar-dark bg-primary">
              <a href="#menu-toggle" id="menu-toggle" className="navbar-brand">
                <span className="navbar-toggler-icon"></span>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarsExample02">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="lol">
                      {this.props.nav_title}
                      <span className="sr-only">
                        (current)
                      </span>
                    </a>
                  </li>
                </ul>


                <StyleDropdown fromRight>
                  <Button>
                    Actions
                    <span className="caret" />
                  </Button>
                  <Dropdown.Menu>
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Another action</Dropdown.Item>
                    <Dropdown.Item separator />
                    <Dropdown.Item color="danger">Dangerous action</Dropdown.Item>
                  </Dropdown.Menu>
                </StyleDropdown>
              </div>

            </nav>
        );
    }

}

export default NavBar;
