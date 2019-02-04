import React, {Component} from 'react';
// import { Link } from "react-router-dom";

/**
 * Class Sidebar
 * LATERAL BAR of the application
 * receives as parameter the text to be displayed in the upper bar
 * It contains a link to the Home page ('/')
 * @author Carlos Elguedo
 * @version 0.0.1
 */
class SideBar extends Component{

    render(){

        return(
          <div id="wrapper" className="">
            <div id="sidebar-wrapper">
              <ul className="sidebar-nav">
                  <li className="sidebar-brand">
                    <a href="">SIF Cartagena</a>
                  </li>
                  <li> <a href=""> {this.props.options[0]} </a> </li>
                  <li> <a href=""> {this.props.options[1]} </a> </li>
                  <li> <a href=""> {this.props.options[2]} </a> </li>
                  <li> <a href=""> {this.props.options[3]} </a> </li>
                  {/*<li> <a href="">Contact</a> </li>*/}

              </ul>
            </div>
          </div>
        );
    }

}

export default SideBar;
