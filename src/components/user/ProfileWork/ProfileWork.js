import React, { Component } from 'react';
import Button from 'emerald-ui/lib/Button';
import ImageUser from './../ImageUser'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import Inbox from '../../user/Inbox'

import { WORKER_ROUTES } from '../../../constants';

/**Global configurations file*/
// const config = require('../../config.js')

class ProfileWork extends Component {

  componentDidMount() {
     const { user_name } = this.props;
     console.log('Hey ', user_name)
    // fetchExclusionEmployees();
  }

    render() {
      return (
        <div className="container">
          <div className="card mb-3">
            <div className="card-body text-center">
              <h3 className="card-header">{this.props.user_name}</h3>
              <div className="row">
                <div className="card-body">
                  <h5 className="card-title">{this.props.user_work}</h5>
                  <h6 className="card-subtitle text-muted">{this.props.user_work_category}</h6>
                </div>
                <ImageUser img_h = "200" img_w = "200" img_url = "car@hotm.com2.jpeg"/>
              </div>

              <ul className="list-group list-group-flush">
                <li className="list-group-item text-center">
                  <LinkContainer to={WORKER_ROUTES.edit}>
                    <div className="btn-toolbar">
                      <Button shape="flat" color="primary">
                        Editar mi perfil
                      </Button>
                    </div>
                  </LinkContainer>
                </li>
              </ul>

            </div>
          </div>
          <Inbox/>
        </div>
      );
    }
  }

  export default ProfileWork;
