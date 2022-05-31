import { Modal, Button, Stack } from 'react-bootstrap';

const ResetButton = (props) => {
  const { changeCareer, ...otherProps } = props;

  return (
    <>
      <Modal
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
            <Button
              variant="danger"
              onClick={(e) => {
                props.onHide();
                changeCareer(e, null);
              }}
            >
              Borrar Datos
            </Button>
            <Button onClick={props.onHide}>Cancelar</Button>
          </Stack>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ResetButton;
