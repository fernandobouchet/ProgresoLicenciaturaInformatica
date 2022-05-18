import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Statistic = () => {
  return (
    <Container>
      <h1>Estadisticas</h1>
      <Link to={'/'}>
        <Button>Volver</Button>
      </Link>
    </Container>
  );
};

export default Statistic;
