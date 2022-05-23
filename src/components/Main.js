import TablaMaterias from './Table';
import { Container, Button, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Main = (props) => {
  const { career, changeCareer, changeCourseState, careerName } = props;

  return (
    <Container>
      <h2>{careerName}</h2> <br />
      <TablaMaterias
        Materias={career}
        changeCareer={changeCareer}
        changeCourseState={changeCourseState}
      />
      <StyledStack gap={3}>
        <Link to={'/estadisticas'}>
          <Button>Ver estadísticas</Button>
        </Link>
        <Button onClick={(e) => changeCareer(e, null)}>Reset</Button>
      </StyledStack>
    </Container>
  );
};

export default Main;

const StyledStack = styled(Stack)`
  max-width: 140px;
  margin: 30px auto;
`;
