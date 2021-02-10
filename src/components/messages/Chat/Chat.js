import React, { Fragment, useEffect, useState } from 'react';
import Panel from 'emerald-ui/lib/Panel';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import * as API from '../../../api';
import moment from 'moment';
import styled from 'styled-components';
import { CLIENT_ROUTES } from '../../../constants';

export const StyleMenu = styled.ul`
  
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
            {/* loadingInboxes */ false? (
              <div className="card-header text-center">
                <div className="card-body">
                  <Spinner animation="grow" variant="warning" />
                </div>
              </div>
            ) : (
              <div className="card">
                <div className="card-header">
                  <h2 className="title">Chat con Fulano</h2>
                </div>
                <div className="card-body">
                  Carlos chat
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

export default Chat;
