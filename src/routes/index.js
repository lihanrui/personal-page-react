import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import ShowcasePlayground from '../pages/ShowcasePlayground';
import StackLab from '../pages/StackLab';
import HobbiesPage from '../pages/HobbiesPage';
import FostersPage from '../pages/FostersPage';
import ErrorPage from '../pages/ErrorPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/showcase-lab" element={<ShowcasePlayground />} />
      <Route path="/stack-lab" element={<StackLab />} />
      <Route path="/hobbies" element={<HobbiesPage />} />
      <Route path="/fosters" element={<FostersPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
