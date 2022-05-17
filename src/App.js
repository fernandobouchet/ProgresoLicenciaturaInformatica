import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import Statistic from './components/Statistic';
import { useState } from 'react';

function App() {
  const [tecnicatura, setTecnicatura] = useState(null);

  function changeCareer(tecnicatura) {
    setTecnicatura(tecnicatura);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            changeCareer={(career) => changeCareer(career)}
            career={tecnicatura}
          />
        }
      />
      <Route path="main" element={<Main career={tecnicatura} />} />
      <Route path="estadisticas" element={<Statistic />} />
    </Routes>
  );
}

export default App;
