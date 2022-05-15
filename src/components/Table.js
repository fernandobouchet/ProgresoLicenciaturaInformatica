import Table from 'react-bootstrap/Table';

const TablaMaterias = (props) => {
  const { Materias } = props;

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Asignatura</th>
          {/* <th>Area</th>
          <th>Hs Semanales</th>
          <th>Hs Totales</th>
          <th>Correlativas</th> */}
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
                    {/* <td>{mat.area}</td>
                    <td>{mat.hsSemanales}</td>
                    <td>{mat.cargaHorariaTotal}</td>
                <td>{mat.correlativas.join('\n')}</td> */}
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
