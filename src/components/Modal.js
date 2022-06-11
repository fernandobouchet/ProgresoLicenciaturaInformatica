import {
  Modal,
  Button,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';
import Buttons from './Buttons';
import styled from 'styled-components';
import { findPendingCorrelatives, itsOptative } from '../Utils/Functions';

const ModalEdit = (props) => {
  const { materias, current, changeState, setCurrent, ...other } = props;

  const CorrelativesPending = findPendingCorrelatives(materias, current);

  return (
    <StyledModal
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
                  La siguiente materia correlativa esta pendiente de ser
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
            {itsOptative(current) && (
              <StyledRow md={2} xs={1}>
                <StyledCol>
                  <StyledH5>Asignatura:</StyledH5>
                </StyledCol>
                <StyledCol>
                  <DropdownButton
                    id="dropdown-item-button"
                    title={current.asignatura}
                  >
                    {current.opciones.map((mat, index) => {
                      return (
                        <Dropdown.Item
                          as="button"
                          value={mat}
                          key={index}
                          onClick={(e) => {
                            setCurrent((prevState) => ({
                              ...prevState,
                              asignatura: e.target.value,
                            }));
                          }}
                        >
                          {mat}
                        </Dropdown.Item>
                      );
                    })}
                  </DropdownButton>
                </StyledCol>
              </StyledRow>
            )}
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
                  current.calificacion,
                  current.id
                );
              }}
            >
              Guardar y cerrar
            </Button>
          </Modal.Footer>
        </>
      )}
    </StyledModal>
  );
};

export default ModalEdit;

const StyledModal = styled(Modal)`
  .modal-content {
    background: ${(props) => props.theme.background};
  }
  .modal-footer {
    border-top: 1px solid ${(props) => props.theme.border};
  }
  .btn-close {
    margin: 0;
    ${(props) =>
      props.theme.text !== 'black' &&
      `background: transparent
      url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27white%27%3e%3cpath d=%27M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z%27/%3e%3c/svg%3e")
      center/1em auto no-repeat;`}
  }
`;

const ModalHeader = styled(Modal.Header)`
  .modal-title {
    margin: auto;
  }
  border-bottom: 1px solid ${(props) => props.theme.border};
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
