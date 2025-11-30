import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactPage from '../pages/Contact';
import ShowcasePlayground from '../pages/ShowcasePlayground';
import HobbieParallax from '../pages/HobbieParallax';
import CompanyPage from '../pages/CompanyPage';
import FostersPage from '../pages/FostersPage';
import ErrorPage from '../pages/ErrorPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CompanyPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/showcase-lab" element={<ShowcasePlayground />} />
      <Route path="/hobbie-parallax" element={<HobbieParallax />} />
      <Route path="/company" element={<CompanyPage />} />
      <Route path="/fosters" element={<FostersPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
