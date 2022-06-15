import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { useState, useEffect } from 'react';
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
import Login from './components/Login';
import firebaseApp from './credentials';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteField,
} from 'firebase/firestore';
import Loader from './components/Loader';

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

function App() {
  const [user, setUser] = useState(null);

  const [theme, setTheme] = useState('dark');

  const [career, setCareer] = useState(null);

  const [careerName, setCareerName] = useState(null);

  const [degree, setDegree] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (userExist) => {
      if (userExist) {
        setUser(userExist);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
  }, [user]);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const data = await getOrCreateDoc(user.email);
        setCareer(data.data.choosenCareer);
        setCareerName(data.data.careerName);
        setDegree(data.data.choosenDegree);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }
    user !== null && fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    async function updateDatabase() {
      try {
        const docRef = doc(firestore, `users/${user.email}`);
        updateDoc(docRef, {
          data: {
            careerName: careerName,
            choosenCareer: [...career],
            choosenDegree: [...degree],
          },
        });
      } catch (err) {
        console.log(err);
      }
    }
    user !== null && updateDatabase();
  }, [careerName, degree, career, user]);

  async function getOrCreateDoc(idDoc) {
    const docRef = doc(firestore, `users/${idDoc}`);
    const docPromise = await getDoc(docRef);

    if (docPromise.exists()) {
      const docInfo = docPromise.data();
      return docInfo;
    } else {
      await setDoc(docRef, {
        data: {
          careerName: careerName,
          choosenCareer: [...career],
          choosenDegree: [...degree],
        },
      });
      const docPromise = await getDoc(docRef);
      const docInfo = docPromise.data();
      return docInfo;
    }
  }

  function handleClick(e) {
    setCareerName(e.target.innerText);
  }

  function changeCareer(e, tecnicatura) {
    handleClick(e);
    setCareer(tecnicatura);
    setDegree(MateriasLicenciaturaInformatica);
  }

  async function resetData() {
    const docRef = doc(firestore, `users/${user.email}`);
    setCareer(null);
    setCareerName('');
    setDegree(null);
    await updateDoc(docRef, {
      data: deleteField(),
    });
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
        {!user && !loading ? (
          <Login />
        ) : loading ? (
          <Loader />
        ) : (
          <>
            <NavigationBar
              resetData={() => resetData()}
              career={career}
              changeTheme={() => changeTheme()}
              theme={theme}
              user={user}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    changeCareer={(e, tecnicatura) =>
                      changeCareer(e, tecnicatura)
                    }
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
          </>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
