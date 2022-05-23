import { Button, Container, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getPorcentajeOfCourses } from '../Utils/StatisticFunctions';
import styled from 'styled-components';

const Statistic = (props) => {
  const { career } = props;

  const approved = getPorcentajeOfCourses(career, 'Aprobada');
  const inProgress = getPorcentajeOfCourses(career, 'Cursando');
  const pending = getPorcentajeOfCourses(career, 'Pendiente');

  return (
    <Container>
      <h1>Estadísticas</h1>
      <PorcentageContainer>
        <h6>Porcentaje de materias aprobadas</h6>
        <ProgressBar
          variant="success"
          now={approved}
          label={`${approved}%`}
        ></ProgressBar>
        <h6>Porcentaje de materias en curso</h6>
        <ProgressBar
          variant="primary"
          now={inProgress}
          label={`${inProgress}%`}
        ></ProgressBar>
        <h6>Porcentaje de materias pendientes</h6>
        <ProgressBar
          variant="secondary"
          now={pending}
          label={`${pending}%`}
        ></ProgressBar>
      </PorcentageContainer>
      <Link to={'/'}>
        <Button>Volver</Button>
      </Link>
    </Container>
  );
};

export default Statistic;

const PorcentageContainer = styled(Container)`
  margin: 2rem 0;
`;
