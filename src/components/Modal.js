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
            <h5>Estado:</h5>
          </Col>
          <Col>
            <Buttons state={current.estado} setCurrent={setCurrent} />
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Nota Final:</h5>
          </Col>
          <Col>
            <input
              type="number"
              name=""
              id=""
              disabled={current.estado === 'Aprobada' ? false : true}
              min={0}
              max={10}
              value={current.estado !== 'Aprobada' ? '' : current.calificacion}
              onChange={(e) =>
                setCurrent((prevState) => ({
                  ...prevState,
                  calificacion: e.target.value,
                }))
              }
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            props.onHide();
            changeCourseState(
              current.asignatura,
              current.estado,
              current.calificacion
            );
          }}
        >
          Guardar y cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEdit;
