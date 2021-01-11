import React, { Fragment, useState } from 'react';
//import { useParams } from 'react-router-dom';
import ImageCover from '../ImageCover';
import ImageUser from '../ImageUser';
import { Tab, Col, Row, Nav } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

const ViewProfileWork = () => {
  //let { id } = useParams();
  const [showSpinner, setShowSpinner] = useState(true);

  return (
    <Fragment>
      {showSpinner ? (
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
            <ImageCover img_url="" />
          </div>
          <div
            style={{
              display: 'block',
              position: 'relative',
              margin: '-120px 0 10px 20px',
              zIndex: '999'
            }}
          >
            <ImageUser img_h="200" img_w="200" img_url={''} />
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
                    <Tab.Pane eventKey="info">Information</Tab.Pane>
                    <Tab.Pane eventKey="works">Historial</Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ViewProfileWork;
