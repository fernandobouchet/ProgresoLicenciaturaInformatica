import AccordionMain from './Accordion';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import CoursesProgressBar from './ProgressBar';
import Home from './Home';
import ProgressBarInfo from './ProgressBarInfo';

const Main = (props) => {
  const { state, changeState, careerName, theme } = props;

  return (
    <>
      {state ? (
        <Container>
          <TitleContainer>
            <h1>{careerName}</h1>
          </TitleContainer>
          <CoursesProgressBar data={state} />
          <ProgressBarInfo />
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
