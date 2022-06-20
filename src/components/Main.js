import AccordionMain from './Accordion';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Home from './Home';
import Statistics from './Statistics';

const Main = (props) => {
  const { state, changeState, careerName, theme } = props;

  return (
    <>
      {state ? (
        <MainContainer>
          <TitleContainer>
            <h1>{careerName}</h1>
          </TitleContainer>
          <Statistics data={state} />
          <AccordionMain
            Materias={state}
            changeState={changeState}
            theme={theme}
            careerName={careerName}
          />
        </MainContainer>
      ) : (
        <Home />
      )}
    </>
  );
};

export default Main;

const TitleContainer = styled.div`
  max-width: 95%;
  margin: 1rem auto;
`;

const MainContainer = styled(Container)`
  @media (min-width: 1024px) {
    max-width: 900px;
  }
`;
