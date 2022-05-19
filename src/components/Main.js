import TablaMaterias from './Table';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Main = (props) => {
  const { career, changeCareer, changeCourseState } = props;

  return (
    <Container>
      <h2>Tecnicatura</h2> <br />
      <TablaMaterias
        Materias={career}
        changeCareer={changeCareer}
        changeCourseState={changeCourseState}
      />
      <div>
        <Link to={'/estadisticas'}>
          <Button>Ver estadisticas</Button>
        </Link>
      </div>
      <br />
      <div>
        <Button onClick={() => changeCareer(null)}>Reset</Button>
      </div>
    </Container>
  );
};

export default Main;
