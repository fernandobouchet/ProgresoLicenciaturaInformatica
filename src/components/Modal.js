import { Modal, Button, Row, Col } from 'react-bootstrap';
import Buttons from './Buttons';
import styled from 'styled-components';
import { findPendingCorrelatives } from '../Utils/StatisticFunctions';

const ModalEdit = (props) => {
  const { materias, current, changeState, setCurrent, ...other } = props;

  const CorrelativesPending = findPendingCorrelatives(materias, current);

  return (
    <Modal
      {...other}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {CorrelativesPending.length >= 1 ? (
        <>
          <ModalHeader closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {current.asignatura}
            </Modal.Title>
          </ModalHeader>
          <ModalBody>
            <StyledRow>
              {CorrelativesPending.length >= 2 ? (
                <p>
                  Las siguientes materias correlativas estan pendientes de ser
                  aprobadas/regularizadas:
                </p>
              ) : (
                <p>
                  La siguiente materia correlativa estan pendiente de ser
                  aprobada/regularizada:
                </p>
              )}
            </StyledRow>
            <StyledRow>
              <StyledList>
                {CorrelativesPending.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </StyledList>
            </StyledRow>
          </ModalBody>
        </>
      ) : (
        <>
          <ModalHeader closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {current.asignatura}
            </Modal.Title>
          </ModalHeader>
          <ModalBody>
            <StyledRow md={2}>
              <StyledCol>
                <StyledH5>Estado:</StyledH5>
              </StyledCol>
              <StyledCol>
                <Buttons state={current.estado} setCurrent={setCurrent} />
              </StyledCol>
            </StyledRow>
            <StyledRow md={2}>
              <StyledCol>
                <StyledH5>Calificación:</StyledH5>
              </StyledCol>
              <StyledCol>
                <StyledInput
                  type="number"
                  name=""
                  id=""
                  disabled={current.estado === 'Aprobada' ? false : true}
                  min={4}
                  max={10}
                  value={
                    current.estado !== 'Aprobada' ? '' : current.calificacion
                  }
                  onChange={(e) =>
                    setCurrent((prevState) => ({
                      ...prevState,
                      calificacion: e.target.value,
                    }))
                  }
                />
              </StyledCol>
            </StyledRow>
          </ModalBody>
          <Modal.Footer>
            <Button
              disabled={
                current.estado === 'Aprobada' && current.calificacion === ''
                  ? true
                  : false
              }
              onClick={() => {
                props.onHide();
                changeState(
                  current.asignatura,
                  current.estado,
                  current.calificacion
                );
              }}
            >
              Guardar y cerrar
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
};

export default ModalEdit;

const ModalHeader = styled(Modal.Header)`
  .modal-title {
    margin: auto;
  }
  .btn-close {
    margin: 0;
  }
`;

const StyledRow = styled(Row)`
  margin: auto;
  align-items: center;
`;

const StyledCol = styled(Col)`
  min-width: 7.3rem;
  margin: 1rem auto;
`;

const ModalBody = styled(Modal.Body)`
  margin: auto;
`;

const StyledInput = styled.input`
  padding: 0;
  text-align: center;
`;

const StyledH5 = styled.h5`
  margin: 0;
`;

const StyledList = styled.ul`
  list-style-type: disclosure-closed;
  width: fit-content;
  margin: 1rem auto;
  text-align: initial;
`;
