import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Statistic from './components/Statistic';
import { useState } from 'react';

function App() {
  const [career, setCareer] = useState(null);

  function changeCareer(tecnicatura) {
    setCareer(tecnicatura);
  }

  function changeCourseState(months, courses, state) {
    setCareer(
      career.map((month) => {
        if (month.cuatrimestre === months) {
          return {
            ...month,
            materias: month.materias.map((course) => {
              if (course.asignatura === courses) {
                return {
                  ...course,
                  estado: state,
                };
              }
              return course;
            }),
          };
        }
        return month;
      })
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            changeCareer={(career) => changeCareer(career)}
            career={career}
            changeCourseState={(month, course, state) =>
              changeCourseState(month, course, state)
            }
          />
        }
      />
      <Route path="estadisticas" element={<Statistic />} />
    </Routes>
  );
}

export default App;
