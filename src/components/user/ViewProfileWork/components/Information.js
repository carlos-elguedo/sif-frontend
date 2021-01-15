import React, { Fragment } from 'react';
import { Col, Row, FormLabel } from 'react-bootstrap';
import styled from 'styled-components';

const StyleFormLabel = styled(FormLabel)`
  padding: 10px;
`;

const Information = ({ data }) => {
  return (
    <Fragment>
      <Row>
        <Col sm={3}>
          <b>
            <StyleFormLabel>Professión:</StyleFormLabel>
          </b>
        </Col>
        <Col sm={9}>
          <StyleFormLabel>{data.professionName_es || ''}</StyleFormLabel>
        </Col>
      </Row>

      <Row>
        <Col sm={3}>
          <b>
            <StyleFormLabel>Nombre:</StyleFormLabel>
          </b>
        </Col>
        <Col sm={9}>
          <StyleFormLabel>{data.name || ''}</StyleFormLabel>
        </Col>
      </Row>

      <Row>
        <Col sm={3}>
          <b>
            <StyleFormLabel>Telefono:</StyleFormLabel>
          </b>
        </Col>
        <Col sm={9}>
          <StyleFormLabel>{data.phone || ''}</StyleFormLabel>
        </Col>
      </Row>

      <Row>
        <Col sm={3}>
          <b>
            <StyleFormLabel>Correo:</StyleFormLabel>
          </b>
        </Col>
        <Col sm={9}>
          <StyleFormLabel>{data.email || ''}</StyleFormLabel>
        </Col>
      </Row>

      <Row>
        <Col sm={3}>
          <b>
            <StyleFormLabel>Dirección:</StyleFormLabel>
          </b>
        </Col>
        <Col sm={9}>
          <StyleFormLabel>{'Preguntar por direccón'}</StyleFormLabel>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Information;
