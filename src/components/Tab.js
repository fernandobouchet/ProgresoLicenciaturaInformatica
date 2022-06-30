import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab } from 'react-bootstrap';
import ModalEdit from './Modal';
import TableInfo from './Table';

const TabMain = (props) => {
  const { Materias, changeState, theme, careerName } = props;

  const [modalShow, setModalShow] = useState(false);

  const [current, setCurrent] = useState({});

  return (
    <>
      <h6>
        {careerName === 'Licenciatura en Informática' ? 'Año' : 'Cuatrimestre'}
      </h6>
      <StyledTabs defaultActiveKey="1">
        {Materias.map((materia, index) => (
          <Tab key={index} eventKey={materia.id} title={materia.bloque}>
            <StyledTable striped hover borderless variant={theme}>
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
      />
    </>
  );
};

export default TabMain;

const StyledTable = styled(Table)`
  --bs-table-bg: ${(props) => props.theme.background};
  --bs-table-striped-bg: ${(props) => props.theme.stripped};
`;

const StyledTabs = styled(Tabs)`
  justify-content: space-evenly;
  border-bottom: 1px solid ${(props) => props.theme.border};

  .nav-link {
    color: #495057;
  }
  .nav-link:hover {
    border-color: ${(props) => props.theme.border};
  }
  .nav-tabs,
  .nav-link.active {
    background-color: inherit;
    border-color: ${(props) => props.theme.border}
      ${(props) => props.theme.border} ${(props) => props.theme.background};
    color: #0d6efd;
  }
`;
