import React, { Component } from 'react';
import Button from 'emerald-ui/lib/Button';
import IconButton from 'emerald-ui/lib/IconButton';
import Modal from 'emerald-ui/lib/Modal/';

class ModalWindow extends Component {

  render() {
    const {show, textBody, textHeader} = this.props;
    return (
      <div>
        <Modal onHide={this.props.close} show={show}>
            <Modal.Header closeButton={true}>
                <Modal.Title>{textHeader}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton ariaLabel="Settings" icon="settings" title="Settings" />
                    <div className="name">{textBody}</div>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={this.props.close} color="primary">Aceptar</Button>
            </Modal.Footer>

        </Modal>
      </div>
    );
  }
}

export default ModalWindow;
