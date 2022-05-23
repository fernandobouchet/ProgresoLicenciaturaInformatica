import { Container, Button, Stack } from 'react-bootstrap';
import { MateriasTecnicaturaInformatica } from '../Utils/TecnicaturaInformatica';
import { MateriasTecnicaturaProgramacion } from '../Utils/TecnicaturaProgramacion';
import { MateriasTecnicaturaRedes } from '../Utils/TecnicaturaRedes';
import Main from './Main';
import styled from 'styled-components';

const Home = (props) => {
  const { changeCareer, career, changeCourseState, careerName } = props;

  return (
    <>
      {!career ? (
        <Container>
          <Header>
            <h1>Progreso de cursada Licenciatura Informática</h1>
          </Header>
          <SubTitle>Elegí la tecnicatura que estas cursando:</SubTitle>
          <StyledStack gap={2}>
            <Button
              onClick={(e) => changeCareer(e, MateriasTecnicaturaInformatica)}
            >
              Tecnicatura en Informática
            </Button>
            <Button
              onClick={(e) => changeCareer(e, MateriasTecnicaturaProgramacion)}
            >
              Tecnicatura en Programación
            </Button>
            <Button onClick={(e) => changeCareer(e, MateriasTecnicaturaRedes)}>
              Tecnicatura en Redes y Operaciones
            </Button>
          </StyledStack>
        </Container>
      ) : (
        <Main
          career={career}
          changeCareer={changeCareer}
          changeCourseState={changeCourseState}
          careerName={careerName}
        />
      )}
    </>
  );
};

export default Home;

const StyledStack = styled(Stack)`
  max-width: 300px;
  margin: auto;
`;

const Header = styled.header`
  margin: 2rem 0;
`;

const SubTitle = styled.h2`
  margin: 5rem 0;
`;
