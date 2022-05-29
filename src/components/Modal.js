import { Modal, Button, Row, Col } from 'react-bootstrap';
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
        <Row>
          <Col>
            <h4>Estado:</h4>
          </Col>
          <Col>
            <Buttons state={current.estado} setCurrent={setCurrent} />
          </Col>
        </Row>
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
