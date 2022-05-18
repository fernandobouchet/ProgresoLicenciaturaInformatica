import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MateriasTecnicaturaInformatica } from '../Utils/TecnicaturaInformatica';
import { MateriasTecnicaturaProgramacion } from '../Utils/TecnicaturaProgramacion';
import { MateriasTecnicaturaRedes } from '../Utils/TecnicaturaRedes';

const Home = (props) => {
  const { changeCareer, career } = props;

  return (
    <Container>
      <header>
        <h1>Progreso de cursada Licenciatura Informática</h1>
      </header>
      <h2>Elegí la tecnicatura que estas cursando:</h2>
      <div className="d-grid gap-2">
        <Button onClick={() => changeCareer(MateriasTecnicaturaInformatica)}>
          Tecnicatura en Informática
        </Button>
        <Button onClick={() => changeCareer(MateriasTecnicaturaProgramacion)}>
          Tecnicatura en Programación
        </Button>
        <Button onClick={() => changeCareer(MateriasTecnicaturaRedes)}>
          Tecnicatura en Redes y Operaciones
        </Button>
      </div>
      <br />
      {career && (
        <Link to={'Main'}>
          <Button>Ir</Button>
        </Link>
      )}
    </Container>
  );
};

export default Home;
