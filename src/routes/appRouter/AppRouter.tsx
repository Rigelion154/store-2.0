import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '../routes';

import MainLayout from '../../components/layouts/MainLayout/MainLayout';
import Home from '../../pages/Home/Home';
import Products from '../../pages/Products/Products';
import Profile from '../../pages/Profile/Profile';
import Cart from '../../pages/Cart/Cart';
import Auth from '../../pages/Auth/Auth';
import FilteredProducts from '../../pages/FilteredProducts/FilteredProducts';

const AppRouter = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<Home />} />
    <Route element={<MainLayout />}>
      <Route path={ROUTES.CATEGORIES} element={<Products />} />
      <Route path={ROUTES.CATEGORY} element={<Products />} />
      <Route path={ROUTES.SUBCATEGORY} element={<Products />} />
      <Route path={ROUTES.SEARCH} element={<FilteredProducts />} />
      <Route path={ROUTES.SALE} element={<FilteredProducts />} />
      <Route path={ROUTES.LEES_THEN} element={<FilteredProducts />} />
      <Route path={ROUTES.TRENDING} element={<FilteredProducts />} />
      <Route path={ROUTES.PRODUCT} element={<Products />} />
    </Route>
    <Route path={ROUTES.LOGIN} element={<Auth />} />
    <Route path={ROUTES.REGISTRATION} element={<Auth />} />
    <Route path={ROUTES.PROFILE} element={<Profile />} />
    <Route path={ROUTES.CART} element={<Cart />} />
  </Routes>
);

export default AppRouter;
