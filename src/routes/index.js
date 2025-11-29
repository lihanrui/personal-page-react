import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ShowcasePlayground from '../pages/ShowcasePlayground';
import HobbieParallax from '../pages/HobbieParallax';
import FostersPage from '../pages/FostersPage';
import ErrorPage from '../pages/ErrorPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/showcase-lab" element={<ShowcasePlayground />} />
      <Route path="/hobbie-parallax" element={<HobbieParallax />} />
      <Route path="/fosters" element={<FostersPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
