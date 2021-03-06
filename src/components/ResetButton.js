import { Modal, Button, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ResetButton = (props) => {
  const { resetData, ...otherProps } = props;

  return (
    <>
      <StyledModal
        {...otherProps}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <p>
            Precaución, al seleccionar la opción <b>'Borrar Datos'</b> se
            eliminaran todos los datos guardados de forma permanente.
          </p>
          <Stack
            direction="horizontal"
            gap={2}
            style={{ justifyContent: 'center' }}
          >
            <Link to={'/'}>
              <Button
                variant="danger"
                onClick={() => {
                  props.onHide();
                  resetData();
                }}
              >
                Borrar Datos
              </Button>{' '}
            </Link>

            <Button onClick={props.onHide}>Cancelar</Button>
          </Stack>
        </Modal.Body>
      </StyledModal>
    </>
  );
};

export default ResetButton;

const StyledModal = styled(Modal)`
  .modal-content {
    background: ${(props) => props.theme.background};
  }
`;
