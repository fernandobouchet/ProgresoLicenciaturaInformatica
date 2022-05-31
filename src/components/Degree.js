import TablaMaterias from './Table';
import { Container, Button, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Degree = (props) => {
  const { degree, changeCourseStateDegree, careerName } = props;

  return (
    <Container>
      <h2>{careerName}</h2> <br />
      <TablaMaterias
        Materias={degree}
        changeCourseState={changeCourseStateDegree}
      />
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

export default Degree;

const StyledStack = styled(Stack)`
  max-width: 140px;
  margin: 30px auto;
`;
