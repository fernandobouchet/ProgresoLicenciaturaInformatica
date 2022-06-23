import { Container, Button, Stack } from 'react-bootstrap';
import { MateriasTecnicaturaInformatica } from '../Utils/TecnicaturaInformatica';
import { MateriasTecnicaturaProgramacion } from '../Utils/TecnicaturaProgramacion';
import { MateriasTecnicaturaRedes } from '../Utils/TecnicaturaRedes';
import styled from 'styled-components';
import Main from './Main';
import WarningModal from './WarningModal';

const Home = (props) => {
  const { changeCareer, career, careerName, changeState, theme, user } = props;

  return (
    <>
      {!career ? (
        <HomeContainer>
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
          {user === 'invited' && <WarningModal />}
        </HomeContainer>
      ) : (
        <Main
          state={career}
          careerName={careerName}
          changeState={changeState}
          theme={theme}
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
