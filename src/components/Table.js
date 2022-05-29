import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import React from 'react';
import styled from 'styled-components';
import { Badge } from 'react-bootstrap';
import ModalEdit from './Modal';

const TablaMaterias = (props) => {
  const { Materias, changeCourseState } = props;

  const [modalShow, setModalShow] = useState(false);

  const [current, setCurrent] = useState({});

  return (
    <>
      <StyledTable striped hover borderless>
        <thead>
          <tr>
            <th>Asignatura</th>
            <th>Estado</th>
          </tr>
        </thead>
        {Materias.map((materia) => {
          return (
            <React.Fragment key={nanoid()}>
              <thead>
                <tr>
                  <th colSpan={2}>{materia.cuatrimestre} cuatrimestre</th>
                </tr>
              </thead>
              <tbody>
                {materia.materias.map((mat) => {
                  return (
                    <tr
                      key={nanoid()}
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        setCurrent(mat);
                        setModalShow(true);
                      }}
                    >
                      <StyledTCourses>{mat.asignatura}</StyledTCourses>
                      <td>
                        <Badge
                          pill
                          bg={
                            mat.estado === 'Cursando'
                              ? 'primary'
                              : mat.estado === 'Aprobada'
                              ? 'success'
                              : 'secondary'
                          }
                        >
                          {mat.estado}
                        </Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </React.Fragment>
          );
        })}
      </StyledTable>
      <ModalEdit
        show={modalShow}
        onHide={() => setModalShow(false)}
        current={current}
        changeCourseState={changeCourseState}
        setCurrent={setCurrent}
      />
    </>
  );
};

export default TablaMaterias;

const StyledTCourses = styled.td`
  vertical-align: middle;
  text-align: left;
`;

const StyledTable = styled(Table)`
  max-width: 800px;
  margin: auto;
`;
