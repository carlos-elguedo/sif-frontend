import React, { Component } from 'react';
import Button from 'emerald-ui/lib/Button';
import ImageUser from './../ImageUser';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import Messages from '../../messages/Messages';
import Spinner from 'react-bootstrap/Spinner';

import { WORKER_ROUTES, REQUEST_STATUSES } from '../../../constants';

class ProfileWork extends Component {
  render() {
    const { data: current_worker, status } = this.props;
    const { LOADING, NOT_LOADED } = REQUEST_STATUSES;
    const showSpinner = status === LOADING || status === NOT_LOADED;

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
            ) : (
              <div>
                <div className="card-header" style={{ fontSize: '20px' }}>
                  <strong>{current_worker.name}</strong>
                </div>
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: '18px' }}>
                    Mi profesión:{' '}
                    <strong>
                      {current_worker.professionName_es || 'Mi profesión'}
                    </strong>
                  </h5>
                  <h6
                    className="card-subtitle mb-2 text-muted"
                    style={{ fontSize: '16px' }}
                  >
                    Mi sector:{' '}
                    <strong>
                      {current_worker.categorieName_es || 'Mi area laboral'}
                    </strong>
                  </h6>
                  <ImageUser
                    img_h="200"
                    img_w="200"
                    img_url={current_worker.profileImage}
                  />
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item text-center">
                      <div className="btn-toolbar">
                        <LinkContainer
                          to={WORKER_ROUTES.edit}
                          style={{ width: '100%' }}
                        >
                          <Button color="primary">Editar mi perfil</Button>
                        </LinkContainer>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          {/** End of header */}
        </div>
        <Messages user="worker"/>
      </div>
    );
  }
}

export default ProfileWork;
