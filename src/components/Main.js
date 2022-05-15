import Button from 'react-bootstrap/Button';
import TablaMaterias from './Table';
import { MateriasTecnicaturas } from '../Utils/Tecnicaturas';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';

const Main = () => {
  const [tecnicatura, setTecnicatura] = useState(
    MateriasTecnicaturas[0].informatica
  );

  return (
    <Container>
      <header>Progreso de cursada Licenciatura Informática</header>
      <h2>Elegí la tecnicatura que estas cursando:</h2>
      <div className="d-grid gap-2">
        <Button
          onClick={() => setTecnicatura(MateriasTecnicaturas[0].informatica)}
        >
          Tecnicatura en Informática
        </Button>
        <Button
          onClick={() => setTecnicatura(MateriasTecnicaturas[1].programacion)}
        >
          Tecnicatura en Programación
        </Button>
        <Button onClick={() => setTecnicatura(MateriasTecnicaturas[2].redes)}>
          Tecnicatura en Redes y Operaciones
        </Button>
      </div>

      <h2>Tecnicatura</h2>
      <TablaMaterias Materias={tecnicatura} />
    </Container>
  );
};

export default Main;
