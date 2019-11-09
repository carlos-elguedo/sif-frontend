import React, { Component } from 'react'
import Button from 'emerald-ui/lib/Button'
import ImageUser from './../ImageUser'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'
import Inbox from '../../user/Inbox'
import Spinner from 'react-bootstrap/Spinner'

import { WORKER_ROUTES, REQUEST_STATUSES } from '../../../constants'

/**Global configurations file*/
// const config = require('../../config.js')

class ProfileWork extends Component {

  componentDidMount() {
    //const { fetchWorker } = this.props
    //fetchWorker()
  }

    render() {
      const { data: current_worker, status } = this.props
      const { LOADING, NOT_LOADED } = REQUEST_STATUSES
      const showSpinner = status === LOADING || status === NOT_LOADED
      // console.log(current_worker)

      return (
        <div className="container">
          <div className="card mb-3">
            <div className="card-body text-center">
            {showSpinner ? (
              <div className="card-header">
                <div className="card-body">
                <Spinner animation="grow" variant="warning" />
                </div>
              </div>
            ) 
            :<div>
              <h3 className="card-header">{current_worker.name}</h3>
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
            }
            </div>{/** End of header */}
          </div>
          <p>Hola: {current_worker.age}</p>
          <p>Hola: {status}</p>
          <Inbox/>
        </div>
      );
    }
  }

  export default ProfileWork;
