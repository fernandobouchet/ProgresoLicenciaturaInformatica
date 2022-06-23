import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import styled from 'styled-components';

const WarningModal = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <StyledModal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Atención</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Al haber ingresado como "Invitado" los datos no se guardarán.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Entendido
          </Button>
        </Modal.Footer>
      </StyledModal>
    </>
  );
};

export default WarningModal;

const StyledModal = styled(Modal)`
  top: 30%;
  .modal-content {
    background: ${(props) => props.theme.background};
  }
  .modal-header,
  .modal-footer {
    border: 0;
    margin: auto;
  }
`;
