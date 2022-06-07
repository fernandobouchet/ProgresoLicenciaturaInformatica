import AccordionMain from './Accordion';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Statistic from './Statistic';

const Main = (props) => {
  const { state, changeState, careerName } = props;

  return (
    <Container>
      <TitleContainer>
        <h1>{careerName}</h1>
      </TitleContainer>
      <Statistic data={state} />
      <AccordionMain Materias={state} changeState={changeState} />
      <LinkContainer>
        <Link to={'/'}>
          <Button>Volver</Button>
        </Link>
      </LinkContainer>
    </Container>
  );
};

export default Main;

const TitleContainer = styled(Container)`
  margin: 2rem 0;
`;

const LinkContainer = styled(Container)`
  margin-top: 5rem;
`;
