import React from 'react';
import Button from 'emerald-ui/lib/Button';
import IconButton from 'emerald-ui/lib/IconButton';
import Modal from 'emerald-ui/lib/Modal/';

const ModalWindow = ({ show, textHeader, textBody, icon, close, children }) => {
  return (
    <div>
      <Modal onHide={close} show={show}>
        <Modal.Header closeButton={true}>
          <Modal.Title>{textHeader}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {icon && (
              <IconButton ariaLabel="Settings" icon={icon} title="Settings" />
            )}
            {textBody && <div className="name">{textBody}</div>}
            {children ? children : <div></div>}
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={close} color="primary">
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalWindow;
