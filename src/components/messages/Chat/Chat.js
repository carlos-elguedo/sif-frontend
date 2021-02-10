import React, { Fragment, useEffect, useState } from 'react';
import Panel from 'emerald-ui/lib/Panel';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import * as API from '../../../api';
import moment from 'moment';
import styled from 'styled-components';
import { CLIENT_ROUTES } from '../../../constants';

const StyleTextArea = styled.textarea`
  :hover {
    border: 2px solid blue;
  }
`;

const StyleDivMessages = styled.div`
  height: 80%;
  overflow-y: auto;

  .message {
    border: 2px solid black;
    padding: 10px;
    margin: 5px;

    .text-message {
      color: black;
    }

    .time-message {
      color: green;
      display: flex;
      justify-content: flex-end;
    }
  }

  .message-user {
    border-radius: 10px 0px 10px 10px;
    background-color: #94c6ff;
    float: right;
    width: 100%;
    max-width: 70%;
  }

  .message-other {
    border-radius: 0px 10px 10px 10px;
    background-color: #dbdbdb;
    float: left;
    width: 100%;
    max-width: 70%;
  }
`;

const Chat = () => {
  useEffect(() => {
    /* API.message
      .getInbox()
      .then(({ data }) => {
        console.log('messages:', data.inboxes);
        setInboxes(data.inboxes || []);
      })
      .catch(e => {
        console.log('error bandeja', e.message);
      })
      .finally(() => {
        setLoadingInboxes(false);
      }); */
  }, []);

  const goTo = url => {
    document.location = url;
  };

  return (
    <Fragment>
      <div className="container">
        <Panel>
          <Panel.Body>
            {
              /* loadingInboxes */ false ? (
                <div className="card-header text-center">
                  <div className="card-body">
                    <Spinner animation="grow" variant="warning" />
                  </div>
                </div>
              ) : (
                <div className="card" style={{ height: '600px' }}>
                  <div className="card-header">
                    <h2 className="title">Chat con Fulano</h2>
                  </div>
                  <div className="card-body" style={{ height: '99%' }}>
                    <StyleDivMessages>
                      <div className="message message-user">
                        <div className="text-message">Hola Carlos</div>
                        <div className="time-message">
                          <Badge
                            style={{ fontSize: '12px' }}
                            pill
                            variant="light"
                          >
                            7 febrero 2020
                          </Badge>
                        </div>
                      </div>
                      {/* Other message */}
                      <div className="message message-other">
                        <div className="text-message">Hola Carlos</div>
                        <div className="time-message">
                          <Badge
                            style={{ fontSize: '12px' }}
                            pill
                            variant="light"
                          >
                            7 febrero 2020
                          </Badge>
                        </div>
                      </div>
                    </StyleDivMessages>

                    <div
                      style={{
                        width: '100%',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        display: 'flex'
                      }}
                    >
                      <StyleTextArea
                        style={{ width: '100%' }}
                        placeholder="Escribe tu mensaje aqui"
                        name="mensajeFromChat"
                        onChange={eve => {
                          console.log('Escribio', eve.target.value);
                        }}
                      ></StyleTextArea>
                      <Button variant="primary">Enviar</Button>
                    </div>
                    {/* end of card body and contaiter */}
                  </div>
                </div>
              )
            }
          </Panel.Body>
        </Panel>
      </div>
    </Fragment>
  );
};

export default Chat;
