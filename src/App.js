import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Career from './components/Career';
import Statistic from './components/Statistic';
import { useEffect, useState } from 'react';
import {
  SaveData,
  LoadCareers,
  LoadDegree,
  LoadCareerName,
} from './Utils/Functions';
import Degree from './components/Degree';
import { MateriasLicenciaturaInformatica } from './Utils/Licenciatura';

function App() {
  const [career, setCareer] = useState(LoadCareers());

  const [careerName, setCareerName] = useState(LoadCareerName());

  const [degree, setDegree] = useState(LoadDegree());

  useEffect(() => {
    SaveData(career, degree, careerName);
  }, [career, degree, careerName]);

  function handleClick(e) {
    e.preventDefault();
    setCareerName(e.target.innerText);
  }

  function changeCareer(e, tecnicatura) {
    handleClick(e);
    setCareer(tecnicatura);
    setDegree(MateriasLicenciaturaInformatica);
  }

  function resetData() {
    setCareer(null);
    setCareerName('');
    setDegree(null);
  }

  function changeCourseStateDegree(courses, state, note) {
    setDegree(
      degree.map((bloque) => {
        return {
          ...bloque,
          materias: bloque.materias.map((course) => {
            if (course.asignatura === courses) {
              return {
                ...course,
                estado: state,
                calificacion: note,
              };
            }
            return course;
          }),
        };
      })
    );
  }

  function changeCourseStateCareer(courses, state, note) {
    setCareer(
      career.map((bloque) => {
        return {
          ...bloque,
          materias: bloque.materias.map((course) => {
            if (course.asignatura === courses) {
              return {
                ...course,
                estado: state,
                calificacion: note,
              };
            }
            return course;
          }),
        };
      })
    );
    changeCourseStateDegree(courses, state, note);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            changeCareer={(e, tecnicatura) => changeCareer(e, tecnicatura)}
            resetData={() => resetData()}
            career={career}
            careerName={careerName}
          />
        }
      />
      <Route path="estadisticas" element={<Statistic />} />
      <Route
        path="tecnicatura"
        element={
          <Career
            career={career}
            careerName={careerName}
            changeCourseState={(course, state, note) =>
              changeCourseStateCareer(course, state, note)
            }
          />
        }
      />
      <Route
        path="licenciatura"
        element={
          <Degree
            degree={degree}
            careerName={'Licenciatura en Informática'}
            changeCourseStateDegree={(course, state, note) =>
              changeCourseStateDegree(course, state, note)
            }
          />
        }
      />
    </Routes>
  );
}

export default App;
