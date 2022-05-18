import TablaMaterias from './Table';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Main = (props) => {
  const { career } = props;

  return (
    <Container>
      {career ? (
        <>
          <h2>Tecnicatura</h2> <br />
          <TablaMaterias Materias={career} />
          <div>
            <Link to={'/estadisticas'}>
              <Button>Ver estadisticas</Button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <h2>Por favor elije una tecnicatura</h2>
          <div>
            <Link to={'/'}>
              <Button>Volver al menú de selección</Button>
            </Link>
          </div>
        </>
      )}
    </Container>
  );
};

export default Main;
