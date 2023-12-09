import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../routes';
import Home from '../../pages/Home/Home';
// import Login from '../../components/layouts/Login/Login';
import Products from '../../pages/Products/Products';
// import Auth from '../../pages/Auth/Auth';
// import Registration from '../../components/layouts/Registration/Registration';
import Profile from '../../pages/Profile/Profile';
import Cart from '../../pages/Cart/Cart';
import Auth2 from '../../pages/Auth/Auth2';

const AppRouter = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<Home />} />
    <Route path={ROUTES.LOGIN} element={<Auth2 />} />
    <Route path={ROUTES.REGISTRATION} element={<Auth2 />} />
    <Route path={ROUTES.PROFILE} element={<Profile />} />
    <Route path={ROUTES.CART} element={<Cart />} />
    <Route path={ROUTES.CATEGORY} element={<Products />} />
    <Route path={ROUTES.SUBCATEGORY} element={<Products />} />
  </Routes>
);

export default AppRouter;
