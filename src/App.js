import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
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
import NavigationBar from './components/NavigationBar';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/theme/GlobalStyles';
import { lightTheme, darkTheme } from './components/theme/Themes';

function App() {
  const [theme, setTheme] = useState('dark');

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

  function changeTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <NavigationBar
          resetData={() => resetData()}
          career={career}
          changeTheme={() => changeTheme()}
          theme={theme}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                changeCareer={(e, tecnicatura) => changeCareer(e, tecnicatura)}
                career={career}
                careerName={careerName}
                changeState={(course, state, note, id) =>
                  changeCourseStateCareer(course, state, note, id)
                }
                theme={theme}
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
                theme={theme}
              />
            }
          />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
