import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import CoursesProgressBar from './ProgressBar';
import {
  getAverageQualification,
  getAmountOfCourses,
} from '../Utils/Functions';

const Statistics = (props) => {
  const { career, degree, careerName } = props;

  const Average = (career) => {
    return getAverageQualification(career, 'Aprobada');
  };

  return (
    <>
      <Container>
        <h1>Estadísticas</h1>
        <SingleStatisticContainer>
          <h2>{careerName}</h2>
          <Container>
            <CoursesProgressBar data={career} />
            <StyledContainer>
              <StyledDiv>
                <Circle bg="success" />
                <StyledSpan>
                  Aprobadas {getAmountOfCourses(career, 'Aprobada')}
                </StyledSpan>
              </StyledDiv>
              <StyledDiv>
                <Circle bg="warning" />
                <StyledSpan>
                  Regularizadas {getAmountOfCourses(career, 'Regularizada')}
                </StyledSpan>
              </StyledDiv>
              <StyledDiv>
                <Circle bg="primary" />
                <StyledSpan>
                  Cursando {getAmountOfCourses(career, 'Cursando')}
                </StyledSpan>
              </StyledDiv>
              <StyledDiv>
                <Circle bg="secondary" />
                <StyledSpan>
                  Pendientes {getAmountOfCourses(career, 'Pendiente')}
                </StyledSpan>
              </StyledDiv>
            </StyledContainer>
            {Average(career) > 0 && (
              <AverageContainer>
                <h4>Promedio</h4>
                <h4>{Average(career)}/10</h4>
              </AverageContainer>
            )}
          </Container>
        </SingleStatisticContainer>
        <SingleStatisticContainer>
          <h2>Licenciatura en Informática</h2>
          <Container>
            <CoursesProgressBar data={degree} />
            <StyledContainer>
              <StyledDiv>
                <Circle bg="success" />
                <StyledSpan>
                  Aprobadas {getAmountOfCourses(degree, 'Aprobada')}
                </StyledSpan>
              </StyledDiv>
              <StyledDiv>
                <Circle bg="warning" />
                <StyledSpan>
                  Regularizadas {getAmountOfCourses(degree, 'Regularizada')}
                </StyledSpan>
              </StyledDiv>
              <StyledDiv>
                <Circle bg="primary" />
                <StyledSpan>
                  Cursando {getAmountOfCourses(degree, 'Cursando')}
                </StyledSpan>
              </StyledDiv>
              <StyledDiv>
                <Circle bg="secondary" />
                <StyledSpan>
                  Pendientes {getAmountOfCourses(degree, 'Pendiente')}
                </StyledSpan>
              </StyledDiv>
            </StyledContainer>
            {Average(degree) > 0 && (
              <AverageContainer>
                <h4>Promedio</h4>
                <h4>{Average(degree)}/10</h4>
              </AverageContainer>
            )}
          </Container>
        </SingleStatisticContainer>
      </Container>
    </>
  );
};

export default Statistics;

const AverageContainer = styled(Container)`
  padding: 1rem 0;
`;

const SingleStatisticContainer = styled(Container)`
  margin: 3rem auto;
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
  @media (max-width: 375px) {
    font-size: 0.7rem;
  }
`;

const Circle = styled.span`
  background-color: rgba(var(--bs-${(props) => props.bg}-rgb));
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  bottom: 0.05rem;
  @media (max-width: 320px) {
    position: relative;
    bottom: 0.1rem;
  }
`;

const StyledDiv = styled(Container)`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  margin: auto;
  justify-content: center;
  width: fit-content;
  padding: 0;
  @media (max-width: 425px) {
    width: 50%;
  }
`;
