import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const PostsPage = lazy(() => import('../pages/PostsPage'));
const HobbiesPage = lazy(() => import('../pages/HobbiesPage'));
const FostersPage = lazy(() => import('../pages/FostersPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

export default function AppRouter() {
  return (
    <Suspense fallback={<div />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/hobbies" element={<HobbiesPage />} />
        <Route path="/fosters" element={<FostersPage />} />
        
        <Route path="*" element={<ErrorPage status={404} message="Page not found." />} />
      </Routes>
    </Suspense>
  );
}
