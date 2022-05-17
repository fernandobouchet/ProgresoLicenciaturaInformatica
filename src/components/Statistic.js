import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Statistic = () => {
  return (
    <div>
      <h1>Estadisticas</h1>
      <Button>
        <Link to={'/Main'}>Volver</Link>
      </Button>
    </div>
  );
};

export default Statistic;
