import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../routes';
import Home from '../../pages/Home/Home';

const AppRouter = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<Home />} />
  </Routes>
);

export default AppRouter;
