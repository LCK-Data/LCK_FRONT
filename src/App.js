import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import ChampionPage from '@pages/ChampionPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={SplashPage()}></Route>
      <Route path="/champion" element={ChampionPage()}></Route>
    </Routes>
  );
}

export default App;
