import TablaMaterias from './Table';
import { Container, Button, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Career = (props) => {
  const { career, changeCourseState, careerName } = props;

  return (
    <Container>
      <h2>{careerName}</h2> <br />
      <TablaMaterias Materias={career} changeCourseState={changeCourseState} />
      <StyledStack gap={3}>
        <Link to={'/estadisticas'}>
          <Button>Ver estadísticas</Button>
        </Link>
        <Link to={'/'}>
          <Button>Volver</Button>
        </Link>
      </StyledStack>
    </Container>
  );
};

export default Career;

const StyledStack = styled(Stack)`
  max-width: 140px;
  margin: 30px auto;
`;
