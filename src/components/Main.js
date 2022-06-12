import AccordionMain from './Accordion';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Statistic from './Statistic';
import Home from './Home';

const Main = (props) => {
  const { state, changeState, careerName, theme } = props;

  return (
    <>
      {state ? (
        <Container>
          <TitleContainer>
            <h1>{careerName}</h1>
          </TitleContainer>
          <Statistic data={state} />
          <AccordionMain
            Materias={state}
            changeState={changeState}
            theme={theme}
          />
        </Container>
      ) : (
        <Home />
      )}
    </>
  );
};

export default Main;

const TitleContainer = styled(Container)`
  max-width: 95%;
  margin: 1rem auto;
`;
