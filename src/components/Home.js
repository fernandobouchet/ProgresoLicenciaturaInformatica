import { Container, Button, Stack } from 'react-bootstrap';
import { MateriasTecnicaturaInformatica } from '../Utils/TecnicaturaInformatica';
import { MateriasTecnicaturaProgramacion } from '../Utils/TecnicaturaProgramacion';
import { MateriasTecnicaturaRedes } from '../Utils/TecnicaturaRedes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ResetButton from './ResetButton';
import { useState } from 'react';

const Home = (props) => {
  const { changeCareer, career, careerName, resetData } = props;

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <HomeContainer>
        <Header>
          <h1>Progreso de cursada Licenciatura Informática</h1>
        </Header>
        {!career ? (
          <Container>
            <SubTitle>Elegí la tecnicatura que estas cursando:</SubTitle>
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
          <>
            <Container>
              <StyledStack gap={3}>
                <Link to={'/tecnicatura'}>
                  <Button>{careerName}</Button>
                </Link>
                <Link to={'/licenciatura'}>
                  <Button>Licenciatura en Informática</Button>
                </Link>
              </StyledStack>
            </Container>
            <ResetButtonContainer>
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Borrar Datos
              </Button>
              <ResetButton
                show={modalShow}
                onHide={() => setModalShow(false)}
                resetData={resetData}
              />
            </ResetButtonContainer>
          </>
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

const Header = styled.header`
  margin: 2rem 0;
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

const ResetButtonContainer = styled(Container)`
  position: absolute;
  top: 90%;
`;
