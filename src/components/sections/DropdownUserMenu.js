import React, { Component } from 'react';


class DropdownUserMenu extends Component {
    render() {
      return (
        <ul className="nav nav-pills" >}
          <li className="nav-item dropdown float-r m-r-20">
            <a className="nav-link dropdown-toggle text-white" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="https://bootswatch.com/simplex/#">Action</a>
              <a className="dropdown-item" href="https://bootswatch.com/simplex/#">Another action</a>
              <a className="dropdown-item" href="https://bootswatch.com/simplex/#">Something else here</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="https://bootswatch.com/simplex/#">Separated link</a>
            </div>
          </li>
        </ul>


      );
    }
  }

  export default DropdownUserMenu;
