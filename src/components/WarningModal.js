import { Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';

const WarningModal = (props) => {
  const { showInvitedWarning, setShowInvitedWarning, setUser } = props;

  const handleClose = () => setShowInvitedWarning(false);

  return (
    <>
      <StyledModal
        show={showInvitedWarning}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Atención</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Al acceder como "Invitado" los datos no se guardarán.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Volver</Button>
          <Button
            variant="danger"
            onClick={() => {
              handleClose();
              setUser('invited');
            }}
          >
            De acuerdo
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
  .modal-footer {
    gap: 4rem;
  }
`;
