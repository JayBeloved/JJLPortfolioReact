import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Comet from './pages/Comet';
import OnboardingPage from './pages/OnboardingPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="comet" element={<Comet />} />
          <Route path="onboarding" element={<OnboardingPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
