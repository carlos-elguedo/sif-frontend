import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Panel from 'emerald-ui/lib/Panel';
import Spinner from 'react-bootstrap/Spinner';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import * as API from '../../../api';
import moment from 'moment';
import styled from 'styled-components';
import Toast from 'emerald-ui/lib/Toast';

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
  const { id } = useParams();
  const [listMessages, setListMessages] = useState([]);
  const [nameChat, setNameChat] = useState('');
  const [idChat, setIdChat] = useState('');
  const [loadingChat, setLoadingChat] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [messageToast, setMessageToast] = useState('');

  useEffect(() => {
    if (id) {
      setLoadingChat(true);
      const interval = setInterval(() => {
        API.message
          .getMessages(id)
          .then(({ data }) => {
            setNameChat(data.nameChat || 'Trabajador');
            setIdChat(data.idOtherUser || '');
            setListMessages(data.messages || []);
          })
          .catch(e => {
            console.log('error chat', e.message);
          })
          .finally(() => {
            setLoadingChat(false);
          });
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [id]);

  const loadChat = () => {
    API.message
      .getMessages(id)
      .then(({ data }) => {
        setNameChat(data.nameChat || 'Trabajador');
        setIdChat(data.idOtherUser || '');
        setListMessages(data.messages || []);
      })
      .catch(e => {
        console.log('error chat', e.message);
      })
      .finally(() => {
        setLoadingChat(false);
      });
  };

  const sentMessage = () => {
    if (newMessage) {
      API.client
        .sendMessage(newMessage, idChat)
        .then(({ data }) => {
          if (data.status === 'ok') {
            setNewMessage('');
            loadChat();
          } else {
            setMessageToast('No se puedo guardar tu mensaje');
          }
        })
        .catch(e => {
          setMessageToast(`Error: ${e.message}`);
        });
    }
  };

  return (
    <Fragment>
      <div className="container">
        <Panel>
          <Panel.Body>
            <div className="card" style={{ height: '600px' }}>
              <div className="card-header">
                <h2 className="title">Chat con {nameChat}</h2>
              </div>
              <div className="card-body" style={{ height: '99%' }}>
                {loadingChat ? (
                  <div className="card-header text-center">
                    <div className="card-body">
                      <Spinner animation="grow" variant="warning" />
                    </div>
                  </div>
                ) : (
                  <StyleDivMessages>
                    {listMessages.map((message, index) => {
                      return (
                        <div
                          key={index}
                          className={`message message-${
                            message.sentBy || 'user'
                          }`}
                        >
                          <div className="text-message">{message.message}</div>
                          <div className="time-message">
                            <Badge
                              style={{ fontSize: '12px' }}
                              pill
                              variant="light"
                            >
                              {moment(message.time).calendar()}
                            </Badge>
                          </div>
                        </div>
                      );
                    })}
                  </StyleDivMessages>
                )}
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
                    value={newMessage}
                    onChange={eve => {
                      setNewMessage(eve.target.value);
                    }}
                  ></StyleTextArea>
                  <Button onClick={sentMessage} variant="primary">
                    Enviar
                  </Button>
                </div>
                {/* end of card body and contaiter */}
              </div>
            </div>
          </Panel.Body>
        </Panel>
      </div>
      <Toast
        message={messageToast || 'Success'}
        actionText="Close"
        position="left"
        visible={Boolean(messageToast)}
        duration={3000}
        onActionClick={() => setMessageToast('')}
      />
    </Fragment>
  );
};

export default Chat;
