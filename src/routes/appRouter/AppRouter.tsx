import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../routes';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Products from '../../pages/Products/Products';

const AppRouter = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<Home />} />
    <Route path={ROUTES.LOGIN} element={<Login />} />
    <Route path={ROUTES.CATEGORY} element={<Products />} />
    <Route path={ROUTES.SUBCATEGORY} element={<Products />} />
  </Routes>
);

export default AppRouter;
