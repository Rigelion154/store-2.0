import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../routes';
import Home from '../../pages/Home/Home';
import Category from '../../pages/Category/Category';
import Categories from '../../pages/Categories/Categories';
import SubCategory from '../../pages/SubCategory/SubCategory';

const AppRouter = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<Home />} />
    <Route path={ROUTES.CATEGORIES} element={<Categories />} />
    <Route path={ROUTES.CATEGORY} element={<Category />} />
    <Route path={ROUTES.SUBCATEGORY} element={<SubCategory />} />
  </Routes>
);

export default AppRouter;
