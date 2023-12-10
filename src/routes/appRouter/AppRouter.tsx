import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '../routes';

import Home from '../../pages/Home/Home';
import Products from '../../pages/Products/Products';
import Profile from '../../pages/Profile/Profile';
import Cart from '../../pages/Cart/Cart';
import Auth from '../../pages/Auth/Auth';
import MainLayout from '../../components/layouts/MainLayout/MainLayout';

const AppRouter = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<Home />} />
    <Route element={<MainLayout />}>
      <Route path={ROUTES.CATEGORIES} element={<Products />} />
      <Route path={ROUTES.CATEGORY} element={<Products />} />
      <Route path={ROUTES.SUBCATEGORY} element={<Products />} />
    </Route>
    <Route path={ROUTES.LOGIN} element={<Auth />} />
    <Route path={ROUTES.REGISTRATION} element={<Auth />} />
    <Route path={ROUTES.PROFILE} element={<Profile />} />
    <Route path={ROUTES.CART} element={<Cart />} />
  </Routes>
);

export default AppRouter;
