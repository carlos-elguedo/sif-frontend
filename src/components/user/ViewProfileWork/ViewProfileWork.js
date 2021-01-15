import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageCover from '../ImageCover';
import ImageUser from '../ImageUser';
import { Tab, Col, Row, Nav } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Toast from 'emerald-ui/lib/Toast';
import { client } from '../../../api';
import { Information } from './components';

const ViewProfileWork = () => {
  const { id } = useParams();
  const [workerInfo, setWorkerInfo] = useState({});
  const [state, setState] = useState({
    loadingProfile: true,
    errorGetProfile: false,
    messageError: ''
  });

  useEffect(() => {
    client
      .getWorkerToView(id)
      .then(({ data }) => {
        setWorkerInfo(data);
        setState({
          loadingProfile: false,
          errorGetProfile: false,
          messageError: ''
        });
      })
      .catch(e => {
        console.log('error', e.message);
        setState({
          loadingProfile: false,
          errorGetProfile: true,
          messageError: e.message
        });
      });
  }, [id]);

  const clearErrorLoading = () =>
    setState({
      loadingProfile: false,
      errorGetProfile: false,
      messageError: ''
    });

  const { loadingProfile, errorGetProfile, messageError } = state;

  const { banner, profileImage, info } = workerInfo;

  return (
    <Fragment>
      {loadingProfile ? (
        <div className="card-header text-center">
          <div className="card-body">
            <Spinner animation="grow" variant="warning" />
          </div>
        </div>
      ) : (
        <div style={{ display: 'block', position: 'relative', width: '100%' }}>
          <div
            style={{
              display: 'block',
              position: 'relative',
              height: '250px',
              overflow: 'hidden',
              zIndex: '1',
              alignContent: 'center'
            }}
          >
            <ImageCover img_url={banner || ''} />
          </div>
          <div
            style={{
              display: 'block',
              position: 'relative',
              margin: '-120px 0 10px 20px',
              zIndex: '999'
            }}
          >
            <ImageUser img_h="200" img_w="200" img_url={profileImage || ''} />
          </div>
          <div style={{ alignItems: 'center', padding: '20px' }}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="info">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="info">Información</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="works">Trabajos</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="info">
                      <Information data={info} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="works">Historial</Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      )}
      <Toast
        message={messageError || 'Oops, something went wrong'}
        actionText="Close"
        position="left"
        visible={errorGetProfile}
        duration={3000}
        onActionClick={clearErrorLoading}
      />
    </Fragment>
  );
};

export default ViewProfileWork;
