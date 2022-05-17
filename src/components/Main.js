import TablaMaterias from './Table';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Main = (props) => {
  const { career } = props;

  return (
    <Container>
      <h2>Tecnicatura</h2> <br />
      <TablaMaterias Materias={career} />
      <div>
        <Button>
          <Link to={'/estadisticas'}>Ver estadisticas</Link>
        </Button>
      </div>
    </Container>
  );
};

export default Main;
