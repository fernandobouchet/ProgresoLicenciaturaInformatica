import { Badge } from 'react-bootstrap';
import styled from 'styled-components';

const TableInfo = (props) => {
  const { materia, setCurrent, setModalShow } = props;

  return (
    <>
      <thead>
        <tr>
          <th>Asignatura</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {materia.materias.map((mat) => {
          return (
            <tr
              key={mat.id}
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
    </>
  );
};

export default TableInfo;

const StyledTCourses = styled.td`
  vertical-align: middle;
  text-align: left;
`;
