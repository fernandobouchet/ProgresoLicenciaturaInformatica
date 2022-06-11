import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import { Accordion } from 'react-bootstrap';
import ModalEdit from './Modal';
import TableInfo from './Table';

const AccordionMain = (props) => {
  const { Materias, changeState, theme } = props;

  const [modalShow, setModalShow] = useState(false);

  const [current, setCurrent] = useState({});

  return (
    <>
      <StyledAccordion>
        {Materias.map((materia) => {
          return (
            <Accordion.Item eventKey={materia.id} key={materia.id}>
              <Accordion.Header>{materia.bloque}</Accordion.Header>
              <Accordion.Body
                as={StyledTable}
                striped
                hover
                borderless
                variant={theme}
              >
                <TableInfo
                  materias={Materias}
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
        materias={Materias}
      />
    </>
  );
};

export default AccordionMain;

const StyledAccordion = styled(Accordion)`
  max-width: 800px;
  margin: auto;

  .accordion-item {
    border: 1px solid ${(props) => props.theme.border};
    background: inherit;
  }

  .accordion-button {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  }
`;

const StyledTable = styled(Table)`
  --bs-table-bg: ${(props) => props.theme.background};
`;
