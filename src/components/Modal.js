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
            <h5>Area:</h5>
          </Col>
          <Col>
            <p>{current.area}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Hs Semanales:</h5>
          </Col>
          <Col>
            <p>{current.hsSemanales}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Carga Horaria:</h5>
          </Col>
          <Col>
            <p>{current.cargaHorariaTotal}</p>
          </Col>
        </Row>
        {current.correlativas && (
          <Row>
            <Col>
              <h5>Correlativas:</h5>
            </Col>
            <Col>
              <ul style={{ padding: 0 }}>
                {current.correlativas.map((correlativa) => (
                  <li style={{ listStyle: 'none' }}>{correlativa}</li>
                ))}
              </ul>
            </Col>
          </Row>
        )}
        <Row>
          <Col>
            <h5>Estado:</h5>
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
