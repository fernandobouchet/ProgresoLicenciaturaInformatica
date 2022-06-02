import {
  Button,
  Badge,
  Container,
  ProgressBar,
  Row,
  Stack,
} from 'react-bootstrap';
import {
  getPercentageOfCourses,
  getAverageQualification,
} from '../Utils/StatisticFunctions';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const Statistic = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location?.state;

  const approved = getPercentageOfCourses(data, 'Aprobada');
  const inProgress = getPercentageOfCourses(data, 'Cursando');
  const pending = getPercentageOfCourses(data, 'Pendiente');
  const average = getAverageQualification(data, 'Aprobada');

  return (
    <StatisticContainer>
      <h4>Estadísticas</h4>
      <Row>
        <StyledStack direction="horizontal" gap={1}>
          <Badge bg="success">Aprobadas</Badge>
          <Badge bg="secondary">Pendientes</Badge>
          <Badge bg="primary">Cursando</Badge>
        </StyledStack>
      </Row>
      <Row>
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
      </Row>
      <h4>Promedio</h4>
      <h5>{average}/10</h5>
      <Button onClick={() => navigate(-1)}>Volver</Button>
    </StatisticContainer>
  );
};

export default Statistic;

const PorcentageContainer = styled(Container)`
  max-width: 500px;
  margin: 1rem auto;
  padding: 1rem 0;
`;

const StatisticContainer = styled(Container)`
  padding: 1rem 0;
  max-width: 800px;
`;

const StyledStack = styled(Stack)`
  justify-content: center;
  margin: 1rem 0;
`;
