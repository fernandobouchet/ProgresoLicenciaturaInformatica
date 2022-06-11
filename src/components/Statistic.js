import { Container, ProgressBar } from 'react-bootstrap';
import {
  getPercentageOfCourses,
  getAverageQualification,
  getAmountOfCourses,
} from '../Utils/Functions';
import styled from 'styled-components';

const Statistic = (props) => {
  const { data } = props;

  const approved = getPercentageOfCourses(data, 'Aprobada');
  const inProgress = getPercentageOfCourses(data, 'Cursando');
  const pending = getPercentageOfCourses(data, 'Pendiente');
  const regular = getPercentageOfCourses(data, 'Regularizada');
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
          <ProgressBar variant="warning" now={regular} label={`${regular}%`} />
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
        <StyledContainer>
          <StyledDiv>
            <Circle bg="success" />
            <StyledSpan>
              Aprobadas {getAmountOfCourses(data, 'Aprobada')}
            </StyledSpan>
          </StyledDiv>
          <StyledDiv>
            <Circle bg="warning" />
            <StyledSpan>
              Regularizadas {getAmountOfCourses(data, 'Regularizada')}
            </StyledSpan>
          </StyledDiv>
          <StyledDiv>
            <Circle bg="primary" />
            <StyledSpan>
              Cursando {getAmountOfCourses(data, 'Cursando')}
            </StyledSpan>
          </StyledDiv>
          <StyledDiv>
            <Circle bg="secondary" />
            <StyledSpan>
              Pendientes {getAmountOfCourses(data, 'Pendiente')}
            </StyledSpan>
          </StyledDiv>
        </StyledContainer>
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

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-around;
  margin: 0.5rem 0;
  padding: 0;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const StyledSpan = styled.span`
  font-size: 0.8rem;
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: rgba(var(--bs-${(props) => props.bg}-rgb));
`;

const StyledDiv = styled(Container)`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  padding: 0;
  margin: auto;
  justify-content: center;

  @media (max-width: 768px) {
    width: 50%;
  }
`;
