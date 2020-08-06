import React, { Component } from 'react';
import Button from 'emerald-ui/lib/Button';
import ImageUser from './../ImageUser';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import Inbox from '../../user/Inbox';
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
                <div className="card-header">{current_worker.name}</div>
                <div className="card-body">
                  <h5 className="card-title">
                    {current_worker.professionName_es || 'Mi profesión'}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {current_worker.categorieName_es || 'Mi area laboral'}
                  </h6>
                  <ImageUser
                    img_h="200"
                    img_w="200"
                    img_url={current_worker.profileImage}
                  />
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-center">
                    <div className="btn-toolbar">
                      <LinkContainer to={WORKER_ROUTES.edit}>
                        <Button shape="flat" color="primary">
                          Editar mi perfil
                        </Button>
                      </LinkContainer>
                      <LinkContainer to={WORKER_ROUTES.edit}>
                        <Button shape="flat" color="primary">
                          Buscar trabajador
                        </Button>
                      </LinkContainer>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/** End of header */}
        </div>
        <p>Hola: {current_worker.age}</p>
        <p>Hola: {status}</p>
        <Inbox />
      </div>
    );
  }
}

export default ProfileWork;
