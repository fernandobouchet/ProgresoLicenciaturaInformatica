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
  margin: 1rem auto 3rem auto;
  .accordion-item {
    border: 1px solid ${(props) => props.theme.border};
    background: inherit;
  }
  .accordion-button {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  }
  .accordion-button:focus {
  }
  .accordion-button:not(.collapsed) {
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }
  .collapsed::after {
    ${(props) =>
      props.theme.text !== 'black' &&
      `background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27white%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e")`}
  }
`;

const StyledTable = styled(Table)`
  --bs-table-bg: ${(props) => props.theme.background};
  --bs-table-striped-bg: ${(props) => props.theme.stripped};
`;
