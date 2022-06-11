import { Container, Button, Stack } from 'react-bootstrap';
import { MateriasTecnicaturaInformatica } from '../Utils/TecnicaturaInformatica';
import { MateriasTecnicaturaProgramacion } from '../Utils/TecnicaturaProgramacion';
import { MateriasTecnicaturaRedes } from '../Utils/TecnicaturaRedes';
import styled from 'styled-components';
import Main from './Main';

const Home = (props) => {
  const { changeCareer, career, careerName, changeState } = props;

  return (
    <>
      <HomeContainer>
        {!career ? (
          <Container>
            <SubTitle>Elegí la tecnicatura:</SubTitle>
            <StyledStack gap={2}>
              <Button
                onClick={(e) => changeCareer(e, MateriasTecnicaturaInformatica)}
              >
                Tecnicatura en Informática
              </Button>
              <Button
                onClick={(e) =>
                  changeCareer(e, MateriasTecnicaturaProgramacion)
                }
              >
                Tecnicatura en Programación
              </Button>
              <Button
                onClick={(e) => changeCareer(e, MateriasTecnicaturaRedes)}
              >
                Tecnicatura en Redes y Operaciones
              </Button>
            </StyledStack>
          </Container>
        ) : (
          <Main
            state={career}
            careerName={careerName}
            changeState={changeState}
          />
        )}
      </HomeContainer>
    </>
  );
};

export default Home;

const StyledStack = styled(Stack)`
  max-width: 300px;
  margin: auto;
`;

const SubTitle = styled.h2`
  margin: 5rem 0;
`;

const HomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
`;
