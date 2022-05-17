import Button from 'react-bootstrap/Button';
import TablaMaterias from './Table';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { MateriasTecnicaturaInformatica } from '../Utils/TecnicaturaInformatica';
import { MateriasTecnicaturaProgramacion } from '../Utils/TecnicaturaProgramacion';
import { MateriasTecnicaturaRedes } from '../Utils/TecnicaturaRedes';

const Main = () => {
  const [tecnicatura, setTecnicatura] = useState(
    MateriasTecnicaturaInformatica
  );

  return (
    <Container>
      <header>Progreso de cursada Licenciatura Informática</header>
      <h2>Elegí la tecnicatura que estas cursando:</h2>
      <div className="d-grid gap-2">
        <Button onClick={() => setTecnicatura(MateriasTecnicaturaInformatica)}>
          Tecnicatura en Informática
        </Button>
        <Button onClick={() => setTecnicatura(MateriasTecnicaturaProgramacion)}>
          Tecnicatura en Programación
        </Button>
        <Button onClick={() => setTecnicatura(MateriasTecnicaturaRedes)}>
          Tecnicatura en Redes y Operaciones
        </Button>
      </div>{' '}
      <br />
      <h2>Tecnicatura</h2> <br />
      <TablaMaterias Materias={tecnicatura} />
    </Container>
  );
};

export default Main;
