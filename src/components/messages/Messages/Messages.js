import React, { Fragment, useEffect, useState } from 'react';
import Panel from 'emerald-ui/lib/Panel';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import * as API from '../../../api';
import moment from 'moment';
import styled from 'styled-components';
import { CLIENT_ROUTES, WORKER_ROUTES } from '../../../constants';

export const StyleMenu = styled.ul`
  li {
    position: relative;
  }
  li:hover {
    cursor: pointer;
    border: 2px solid blue;
  }
`;

const Messages = () => {
  const [inboxes, setInboxes] = useState([]);
  const [loadingInboxes, setLoadingInboxes] = useState(true);
  const [userType, setUserType] = useState('');

  useEffect(() => {
    API.message
      .getInbox()
      .then(({ data }) => {
        setInboxes(data.inboxes || []);
        setUserType(data.userType || '');
      })
      .catch(e => {
        console.log('error bandeja', e.message);
      })
      .finally(() => {
        setLoadingInboxes(false);
      });
  }, []);

  const goTo = url => {
    document.location = url;
  };

  return (
    <Fragment>
      <div className="container">
        <Panel>
          <Panel.Body>
            {loadingInboxes ? (
              <div className="card-header text-center">
                <div className="card-body">
                  <Spinner animation="grow" variant="warning" />
                </div>
              </div>
            ) : (
              <div className="card">
                <div className="card-header">
                  <h2 className="title">Bandeja de mensajes</h2>
                </div>
                <div className="card-body">
                  <StyleMenu className="list-group menu">
                    {inboxes.length === 0 ? (
                      <Alert variant="success">
                        <Alert.Heading>Aún no tienes mensajes</Alert.Heading>
                        <p>
                          Puedes enviar y recibir mensajes con personas en tu
                          ciudad
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                          <span>Aquí apareceran tus mensajes</span>
                        </div>
                      </Alert>
                    ) : (
                      inboxes.map((inbox, index) => {
                        return (
                          <li
                            className="list-group-item d-flex justify-content-between align-items-center alert-success"
                            key={index}
                            onClick={() => {
                              const newMessageUrl =
                                userType === '1'
                                  ? CLIENT_ROUTES.chat
                                  : WORKER_ROUTES.chat;
                              goTo(`${newMessageUrl.replace(':id', inbox.id)}`);
                            }}
                          >
                            <div style={{ display: 'flex' }}>
                              <p>
                                <Badge
                                  style={{ fontSize: '16px' }}
                                  pill
                                  variant="primary"
                                >
                                  {inbox.with}
                                </Badge>
                                <br></br>
                                <strong>{inbox.sentBy}: </strong>
                                {inbox.message}
                              </p>
                            </div>
                            <span className="badge badge-success badge-pill">
                              {moment(inbox.time).startOf('day').fromNow()}
                            </span>
                          </li>
                        );
                      })
                    )}
                  </StyleMenu>
                  {/* end of card body and contaiter */}
                </div>
              </div>
            )}
          </Panel.Body>
        </Panel>
      </div>
    </Fragment>
  );
};

export default Messages;
