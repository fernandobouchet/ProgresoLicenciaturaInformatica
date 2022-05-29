import { Modal, Button } from 'react-bootstrap';
import Buttons from './Buttons';

const ModalEdit = (props) => {
  const { current, changeCourseState, setCurrent, ...other } = props;
  return (
    <Modal
      {...other}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {current.asignatura}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Estado:</h4>
        <Buttons state={current.estado} setCurrent={setCurrent} />
        <h4>Nota Final:</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            props.onHide();
            changeCourseState(current.asignatura, current.estado);
          }}
        >
          Guardar y cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEdit;
