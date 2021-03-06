import React, { Component } from 'react';
import Button from 'emerald-ui/lib/Button';
import Spinner from 'react-bootstrap/Spinner';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import Search from '../../sections/Search';
import { CLIENT_ROUTES, REQUEST_STATUSES } from '../../../constants';

const { LOADING, NOT_LOADED } = REQUEST_STATUSES;

class ProfileClient extends Component {
  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  render() {
    const {
      status,
      data: data_client,
      status_categories,
      data_categories
    } = this.props;
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
                <div className="card-header">{data_client.name}</div>
                <div className="card-body">
                  <Search
                    options={data_categories}
                    status={status_categories}
                  />
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-center">
                    <div className="btn-toolbar">
                      <LinkContainer to={CLIENT_ROUTES.edit}>
                        <Button shape="flat" color="primary">
                          Editar mi perfil
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
      </div>
    );
  }
}

export default ProfileClient;
