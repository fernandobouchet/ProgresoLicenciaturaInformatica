import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Statistic from './components/Statistic';
import { useState } from 'react';

function App() {
  const [career, setCareer] = useState(null);

  function changeCareer(tecnicatura) {
    setCareer(tecnicatura);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            changeCareer={(career) => changeCareer(career)}
            career={career}
          />
        }
      />
      <Route path="estadisticas" element={<Statistic />} />
    </Routes>
  );
}

export default App;
