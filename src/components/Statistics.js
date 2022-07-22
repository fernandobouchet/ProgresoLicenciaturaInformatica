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
        {Average(data) > 0 && (
          <AverageBadge pill>Promedio: {Average(data)}</AverageBadge>
        )}
      </StatisticContainer>
    </>
  );
};

export default Statistics;

const StatisticContainer = styled(Container)`
  padding: 0;
`;

const AverageBadge = styled(Badge)`
  background-color: ${(props) => props.theme.stripped} !important;
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.border};
  font-weight: 500;
  font-size: 0.9rem;
  @media (max-width: 375px) {
    font-size: 0.8rem;
  }
  @media (max-width: 425px) {
    font-size: 12px;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 0 1rem 0;
`;

const StyledSpan = styled.span`
  font-size: 0.8rem;
  @media (max-width: 375px) {
    font-size: 0.7rem;
  }
  @media (max-width: 425px) {
    font-size: 12px;
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
  @media (max-width: 425px) {
    font-size: 12px;
  }
`;
