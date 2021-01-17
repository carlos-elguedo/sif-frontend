import React from 'react';
import Button from 'emerald-ui/lib/Button';
import styled from 'styled-components';

const StyleBottom = styled(Button)`
  border: 2px solid;
  width: 100%;
`;

const ActionButton = ({ primaryAction, secundaryAction }) => {
  return (
    <div className="row">
      <div className="col-6">
        <StyleBottom size="lg" onClick={secundaryAction}>
          Cancelar
        </StyleBottom>
      </div>
      <div className="col-6">
        <StyleBottom color="primary" size="lg" onClick={primaryAction}>
          Guardar cambios
        </StyleBottom>
      </div>
    </div>
  );
};

export default ActionButton;
