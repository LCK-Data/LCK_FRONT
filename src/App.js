import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={SplashPage()}></Route>
    </Routes>
  );
}

export default App;
