import { Badge, Container, ProgressBar, Stack } from 'react-bootstrap';
import {
  getPercentageOfCourses,
  getAverageQualification,
  getAmountOfCourses,
} from '../Utils/StatisticFunctions';
import styled from 'styled-components';

const Statistic = (props) => {
  const { data } = props;

  const approved = getPercentageOfCourses(data, 'Aprobada');
  const inProgress = getPercentageOfCourses(data, 'Cursando');
  const pending = getPercentageOfCourses(data, 'Pendiente');
  const average = getAverageQualification(data, 'Aprobada');

  return (
    <StatisticContainer>
      <Container>
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
      </Container>
      <Container>
        <Container>
          <StyledStack direction="horizontal" gap={1}>
            <Badge bg="success"> </Badge>
            <StyledSpan>
              Aprobadas {getAmountOfCourses(data, 'Aprobada')}
            </StyledSpan>
            <Badge bg="primary"> </Badge>
            <StyledSpan>
              Cursando {getAmountOfCourses(data, 'Cursando')}
            </StyledSpan>
            <Badge pill bg="secondary">
              {' '}
            </Badge>
            <StyledSpan>
              Pendientes {getAmountOfCourses(data, 'Pendiente')}
            </StyledSpan>
          </StyledStack>
        </Container>
        {average >= 1 && (
          <AverageContainer>
            <h6>Promedio</h6>
            <h6>{average}/10</h6>
          </AverageContainer>
        )}
      </Container>
    </StatisticContainer>
  );
};

export default Statistic;

const StatisticContainer = styled(Container)`
  padding: 1rem 0;
  max-width: 800px;
  border-top: 1px solid black;
`;

const AverageContainer = styled(Container)`
  padding: 1rem 0;
`;

const StyledStack = styled(Stack)`
  justify-content: center;
  margin: 1rem 0;
`;

const StyledSpan = styled.span`
  font-size: 0.8rem;
`;
