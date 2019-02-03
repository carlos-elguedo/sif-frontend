import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import DropdownUserMenu from './DropdownUserMenu'

/**
 * Class NavBar
 * Header of the application
 * receives as parameter the text to be displayed in the upper bar
 * It contains a link to the Home page ('/')
 * @author Carlos Elguedo
 * @version 0.0.1
 */
class NavBar extends Component{

    render(){
        return(
                // <nav className="navbar navbar-light bg-primary">
                // <Link to={`/`}>
                //     <div className="navbar-brand text-white" href="">
                //         <img src="assets/images/sif72.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
                //         {this.props.nav_title}
                //     </div>
                // </Link>
                // </nav>

                //FUL BACANO
                // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                //   <a className="navbar-brand" href="#">Navbar</a>
                //   <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                //     <span className="navbar-toggler-icon"></span>
                //   </button>
                //
                //   <div className="navbar-collapse collapse" id="navbarColor01">
                //     <ul className="navbar-nav mr-auto">
                //       <li className="nav-item active">
                //         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                //       </li>
                //       <li className="nav-item">
                //         <a className="nav-link" href="#">Features</a>
                //       </li>
                //       <li className="nav-item">
                //         <a className="nav-link" href="#">Pricing</a>
                //       </li>
                //       <li className="nav-item">
                //         <a className="nav-link" href="#">About</a>
                //       </li>
                //     </ul>
                //     <form className="form-inline my-2 my-lg-0">
                //       <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                //       <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                //     </form>
                //   </div>
                // </nav>

                //LATERAL:
                // <div>
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
                          <a className="nav-link" href="">
                            {this.props.nav_title}
                            <span className="sr-only">
                              (current)
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="">Link</a>
                        </li>
                      </ul>

                      <DropdownUserMenu/>

                    </div>

                  </nav>
              // </div>
        );
    }

}

export default NavBar;
