import { Badge, Container } from 'react-bootstrap';
import styled from 'styled-components';
import CoursesProgressBar from './ProgressBar';
import {
  getAverageQualification,
  getAmountOfCourses,
} from '../Utils/Functions';

const Statistics = (props) => {
  const { data } = props;

  const Average = (career) => {
    return getAverageQualification(career, 'Aprobada');
  };

  return (
    <>
      <StatisticContainer>
        <CoursesProgressBar data={data} />
        <StyledContainer>
          <StyledDiv>
            <StyledBadge pill bg="success">
              {getAmountOfCourses(data, 'Aprobada')}
            </StyledBadge>
            <StyledSpan>Aprobadas</StyledSpan>
          </StyledDiv>
          <StyledDiv>
            <StyledBadge pill bg="warning">
              {getAmountOfCourses(data, 'Regularizada')}
            </StyledBadge>
            <StyledSpan>Regularizadas</StyledSpan>
          </StyledDiv>
          <StyledDiv>
            <StyledBadge pill bg="primary">
              {getAmountOfCourses(data, 'Cursando')}
            </StyledBadge>
            <StyledSpan>Cursando</StyledSpan>
          </StyledDiv>
          <StyledDiv>
            <StyledBadge pill bg="secondary">
              {getAmountOfCourses(data, 'Pendiente')}
            </StyledBadge>
            <StyledSpan>Pendientes</StyledSpan>
          </StyledDiv>
        </StyledContainer>
        {/*        {Average(data) > 0 && (
          <AverageContainer>
            <h6>Promedio: {Average(data)}</h6>
          </AverageContainer>
        )} */}
      </StatisticContainer>
    </>
  );
};

export default Statistics;

const StatisticContainer = styled(Container)`
  padding: 0;
`;

const AverageContainer = styled(Container)`
  padding: 0.5rem 0;
  h6 {
    margin: 0;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 0;
`;

const StyledSpan = styled.span`
  font-size: 0.8rem;
  @media (max-width: 375px) {
    font-size: 0.7rem;
  }
`;

const StyledDiv = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
  align-items: center;
  margin: auto;
  justify-content: center;
  width: fit-content;
  padding: 0;
  margin: 0;
`;

const StyledBadge = styled(Badge)`
  font-size: 0.6rem;
  padding: 0.3em 0.6em;
`;
