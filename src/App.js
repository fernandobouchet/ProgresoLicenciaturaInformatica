import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Statistic from './components/Statistic';
import { useEffect, useState } from 'react';
import {
  SaveData,
  LoadCareers,
  LoadDegree,
  LoadCareerName,
} from './Utils/SaveDataFunctions';
import Main from './components/Main';
import { MateriasLicenciaturaInformatica } from './Utils/Licenciatura';
import {
  renameEquivalent,
  equivalentAverageNote,
  itsEquivalent,
} from './Utils/Functions';

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

  function changeCourseStateCareer(courses, state, note, id) {
    setCareer(
      career.map((bloque) => {
        return {
          ...bloque,
          materias: bloque.materias.map((course) => {
            if (course.asignatura === courses || course.id === id) {
              return {
                ...course,
                asignatura: courses,
                estado: state,
                calificacion: note,
              };
            }
            return course;
          }),
        };
      })
    );
    if (itsEquivalent(courses)) {
      changeCourseStateDegree(
        renameEquivalent(courses),
        state,
        equivalentAverageNote(career, courses, note)
      );
    } else {
      changeCourseStateDegree(courses, state, note);
    }
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
          <Main
            state={career}
            careerName={careerName}
            changeState={(course, state, note, id) =>
              changeCourseStateCareer(course, state, note, id)
            }
          />
        }
      />
      <Route
        path="licenciatura"
        element={
          <Main
            state={degree}
            careerName={'Licenciatura en Informática'}
            changeState={(course, state, note) =>
              changeCourseStateDegree(course, state, note)
            }
          />
        }
      />
    </Routes>
  );
}

export default App;
