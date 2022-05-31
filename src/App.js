import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Career from './components/Career';
import Statistic from './components/Statistic';
import { useEffect, useState } from 'react';
import { SaveCareer, LoadCareers, LoadCareerName } from './Utils/Functions';
import Degree from './components/Degree';
import { MateriasLicenciaturaInformatica } from './Utils/Licenciatura';

function App() {
  const [career, setCareer] = useState(LoadCareers());

  const [careerName, setCareerName] = useState(LoadCareerName());

  const [degree, setDegree] = useState(MateriasLicenciaturaInformatica);

  useEffect(() => {
    SaveCareer(career, careerName);
  }, [career, careerName]);

  function handleClick(e) {
    e.preventDefault();
    setCareerName(e.target.innerText);
  }

  function changeCareer(e, tecnicatura) {
    handleClick(e);
    setCareer(tecnicatura);
  }

  function changeCourseStateDegree(courses, state) {
    setDegree(
      degree.map((bloque) => {
        return {
          ...bloque,
          materias: bloque.materias.map((course) => {
            if (course.asignatura === courses) {
              return {
                ...course,
                estado: state,
              };
            }
            return course;
          }),
        };
      })
    );
  }

  function changeCourseStateCareer(courses, state) {
    setCareer(
      career.map((bloque) => {
        return {
          ...bloque,
          materias: bloque.materias.map((course) => {
            if (course.asignatura === courses) {
              return {
                ...course,
                estado: state,
              };
            }
            return course;
          }),
        };
      })
    );
    changeCourseStateDegree(courses, state);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            changeCareer={(e, career) => changeCareer(e, career)}
            career={career}
            careerName={careerName}
          />
        }
      />
      <Route path="estadisticas" element={<Statistic career={career} />} />
      <Route
        path="tecnicatura"
        element={
          <Career
            career={career}
            careerName={careerName}
            changeCourseState={(course, state) =>
              changeCourseStateCareer(course, state)
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
            changeCourseStateDegree={(course, state) =>
              changeCourseStateDegree(course, state)
            }
          />
        }
      />
    </Routes>
  );
}

export default App;
