import React, { Component } from 'react';

import HeaderUser from './HeaderUser'
import ImageUser from './ImageUser'


/**Global configurations file*/
const config = require('../../config.js')

class ProfileWork extends Component {
    render() {
      return (
          // <div className="container">
          //   <div className="row">
          //     <ImageUser/>
          //     <HeaderUser/>
          //   </div>
          // </div>
          <div className="card mb-3">
            <h3 className="card-header">{this.props.user_name}</h3>

            <div className="row">

              <div className="card-body float-l col-lg-6">
                <h5 className="card-title m-l-10">{this.props.user_work}</h5>
                <h6 className="card-subtitle text-muted m-l-10">{this.props.user_work_category}</h6>
              </div>

              <div className="float-r col-lg-6 text-center">
                <img className="wrap-pic-cir-4 h=300 w-300" src={config.SERVER_URL+"/img/perfil/car@hotm.com2.jpeg"} alt="Card image"/>
              </div>
            </div>

            <div className="card-body text-center">

            </div>

            <ul className="list-group list-group-flush">
              <li className="list-group-item text-center">
                	{/*<button type="button" className="btn btn-primary btn-lg">Editar mi perfil</button>*/}
                  <a href="" className="card-link">Editar mi perfil</a>
              </li>
            </ul>
          </div>
      );
    }
  }

  export default ProfileWork;
