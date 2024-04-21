import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/details/:cityId" element={<DetailsPage />} />
        </Routes>
      </Router>
  );
}

export default App;