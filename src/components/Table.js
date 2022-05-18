import Table from 'react-bootstrap/Table';
import Buttons from './Buttons';

const TablaMaterias = (props) => {
  const { Materias } = props;

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
          <>
            <thead>
              <tr>
                <th colSpan={1}>{materia.cuatrimestre} cuatrimestre</th>
              </tr>
            </thead>
            <tbody>
              {materia.materias.map((mat) => {
                return (
                  <tr>
                    <td>{mat.asignatura}</td>
                    <td>
                      <Buttons state={mat.estado}></Buttons>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </>
        );
      })}
    </Table>
  );
};

export default TablaMaterias;
