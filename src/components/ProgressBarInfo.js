import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const ProgressBarInfo = () => {
  return (
    <StyledContainer>
      <StyledDiv>
        <Circle bg="success" />
        <StyledSpan>Aprobadas</StyledSpan>
      </StyledDiv>
      <StyledDiv>
        <Circle bg="warning" />
        <StyledSpan>Regularizadas</StyledSpan>
      </StyledDiv>
      <StyledDiv>
        <Circle bg="primary" />
        <StyledSpan>Cursando</StyledSpan>
      </StyledDiv>
      <StyledDiv>
        <Circle bg="secondary" />
        <StyledSpan>Pendientes</StyledSpan>
      </StyledDiv>
    </StyledContainer>
  );
};

export default ProgressBarInfo;

const StyledContainer = styled(Container)`
  max-width: 800px;
  display: flex;
  justify-content: space-around;
  margin: auto;
  padding: 0 0 1rem 0;
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
`;
