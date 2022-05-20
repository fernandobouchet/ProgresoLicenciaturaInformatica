import { Container, Button, Stack } from 'react-bootstrap';
import { MateriasTecnicaturaInformatica } from '../Utils/TecnicaturaInformatica';
import { MateriasTecnicaturaProgramacion } from '../Utils/TecnicaturaProgramacion';
import { MateriasTecnicaturaRedes } from '../Utils/TecnicaturaRedes';
import Main from './Main';

const Home = (props) => {
  const { changeCareer, career, changeCourseState, careerName } = props;

  return (
    <>
      {!career ? (
        <Container>
          <header>
            <h1>Progreso de cursada Licenciatura Informática</h1>
          </header>
          <h2>Elegí la tecnicatura que estas cursando:</h2>
          <Stack gap={2} className="col-md-5 mx-auto">
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
          </Stack>
          <br />
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
