import Table from 'react-bootstrap/Table';
import Buttons from './Buttons';
import { nanoid } from 'nanoid';
import React from 'react';
import styled from 'styled-components';

const TablaMaterias = (props) => {
  const { Materias, changeCourseState } = props;

  return (
    <Table hover size="sm">
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
                  <StyledTrCourses key={nanoid()} state={mat.estado}>
                    <StyledTCourses>{mat.asignatura}</StyledTCourses>
                    <td>
                      <Buttons
                        state={mat.estado}
                        changeCourseState={changeCourseState}
                        month={materia.cuatrimestre}
                        course={mat.asignatura}
                      ></Buttons>
                    </td>
                  </StyledTrCourses>
                );
              })}
            </tbody>
          </React.Fragment>
        );
      })}
    </Table>
  );
};

export default TablaMaterias;

const StyledTrCourses = styled.tr`
  background-color: ${(props) =>
    props.state === 'Aprobada'
      ? '#d1e7dd'
      : props.state === 'En curso'
      ? '#cfe2ff'
      : '#e2e3e5'};
  color: ${(props) =>
    props.state === 'Aprobada'
      ? '#295c3e'
      : props.state === 'En curso'
      ? '#1e4298'
      : '#4d5257'};
`;

const StyledTCourses = styled.td`
  vertical-align: middle;
  text-align: left;
`;
