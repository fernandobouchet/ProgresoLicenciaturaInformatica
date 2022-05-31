import { Button, Container, ProgressBar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getPorcentajeOfCourses } from '../Utils/StatisticFunctions';
import styled from 'styled-components';

const Statistic = (props) => {
  const { career } = props;
  const navigate = useNavigate();

  const approved = getPorcentajeOfCourses(career, 'Aprobada');
  const inProgress = getPorcentajeOfCourses(career, 'Cursando');
  const pending = getPorcentajeOfCourses(career, 'Pendiente');

  return (
    <Container>
      <h1>Estadísticas</h1>
      <PorcentageContainer>
        <ProgressBar>
          <ProgressBar
            variant="success"
            now={approved}
            label={`${approved}%`}
          />
          <ProgressBar
            variant="primary"
            now={inProgress}
            label={`${inProgress}%`}
          />
          <ProgressBar
            variant="secondary"
            now={pending}
            label={`${pending}%`}
          />
        </ProgressBar>
      </PorcentageContainer>
      <Button onClick={() => navigate(-1)}>Volver</Button>
    </Container>
  );
};

export default Statistic;

const PorcentageContainer = styled(Container)`
  margin: 2rem 0;
`;
