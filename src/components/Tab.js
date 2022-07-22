import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab } from 'react-bootstrap';
import ModalEdit from './Modal';
import TableInfo from './Table';

const TabMain = (props) => {
  const { Materias, changeState, theme, careerName, career } = props;

  const [modalShow, setModalShow] = useState(false);

  const [current, setCurrent] = useState({});

  return (
    <>
      <h6>
        {careerName === 'Licenciatura en Informática' ? 'Año' : 'Cuatrimestre'}
      </h6>
      <StyledTabs defaultActiveKey="1" justify>
        {Materias.map((materia, index) => (
          <Tab key={index} eventKey={materia.id} title={materia.bloque}>
            <StyledTable striped hover variant={theme} borderless>
              <TableInfo
                materia={materia}
                setCurrent={setCurrent}
                setModalShow={setModalShow}
              />
            </StyledTable>
          </Tab>
        ))}
      </StyledTabs>

      <ModalEdit
        show={modalShow}
        onHide={() => setModalShow(false)}
        current={current}
        changeState={changeState}
        setCurrent={setCurrent}
        materias={Materias}
        career={career}
        careerName={careerName}
      />
    </>
  );
};

export default TabMain;

const StyledTable = styled(Table)`
  margin: 1rem auto;
  --bs-table-bg: ${(props) => props.theme.background};
  --bs-table-striped-bg: ${(props) => props.theme.stripped};

  > :not(:first-child) {
    border-top: none;
  }
  @media (max-width: 425px) {
    font-size: 14px;
  }
`;

const StyledTabs = styled(Tabs)`
  justify-content: space-evenly;
  border-bottom: 2px solid ${(props) => props.theme.border};

  .nav-link {
    color: #495057;
  }
  .nav-link:hover {
    border-color: transparent;
  }
  .nav-tabs,
  .nav-link.active {
    background-color: inherit;
    border-color: transparent;
    border-bottom: 2px solid;
    border-bottom-color: #356feb;
    color: ${(props) => props.theme.text};
  }
  @media (max-width: 425px) {
    font-size: 14px;
  }
`;
