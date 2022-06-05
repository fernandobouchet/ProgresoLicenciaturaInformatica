import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import { Accordion } from 'react-bootstrap';
import ModalEdit from './Modal';
import TableInfo from './Table';

const AccordionMain = (props) => {
  const { Materias, changeState } = props;

  const [modalShow, setModalShow] = useState(false);

  const [current, setCurrent] = useState({});

  return (
    <>
      <StyledAccordion>
        {Materias.map((materia) => {
          return (
            <Accordion.Item eventKey={materia.id} key={materia.id}>
              <Accordion.Header>{materia.bloque}</Accordion.Header>
              <Accordion.Body as={Table} striped hover borderless>
                <TableInfo
                  materia={materia}
                  setCurrent={setCurrent}
                  setModalShow={setModalShow}
                />
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </StyledAccordion>
      <ModalEdit
        show={modalShow}
        onHide={() => setModalShow(false)}
        current={current}
        changeState={changeState}
        setCurrent={setCurrent}
      />
    </>
  );
};

export default AccordionMain;

const StyledAccordion = styled(Accordion)`
  max-width: 800px;
  margin: auto;
`;
