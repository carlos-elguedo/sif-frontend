import React, { Fragment } from 'react';
import { Col, Row, FormLabel } from 'react-bootstrap';
import Label from 'emerald-ui/lib/Label';
import styled from 'styled-components';

const StyleFormLabel = styled(FormLabel)`
  padding: 10px;
`;

const Information = ({ data }) => {
  console.log('🚀 ~ file: Information.js ~ line 10 ~ Information ~ data', data);
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
          <StyleFormLabel>{data.address || ''}</StyleFormLabel>
        </Col>
      </Row>

      <Row>
        <Col sm={3}>
          <b>
            <StyleFormLabel>Disponibilidad:</StyleFormLabel>
          </b>
        </Col>
        <Col sm={9}>
          <Label color={data.disponibily ? 'success' : 'warning'}>
            {data.disponibily ? 'Disponible' : 'No Disponible'}
          </Label>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Information;
