import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Statistic from './components/Statistic';
import { useEffect, useState } from 'react';
import { SaveCareer, LoadCareers, LoadCareerName } from './Utils/Functions';

function App() {
  const [career, setCareer] = useState(LoadCareers());

  const [careerName, setCareerName] = useState(LoadCareerName());

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
            changeCareer={(e, career) => changeCareer(e, career)}
            career={career}
            changeCourseState={(month, course, state) =>
              changeCourseState(month, course, state)
            }
            careerName={careerName}
          />
        }
      />
      <Route path="estadisticas" element={<Statistic />} />
    </Routes>
  );
}

export default App;
