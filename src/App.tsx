import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from './features/store';
import { getCategories } from './features/categories/categoriesSlice';
import getAnonymousToken from './utils/services/getAnonymousToken';

import AppRouter from './routes/appRouter/AppRouter';
import Header from './components/layouts/Header/Header';
import Footer from './components/layouts/Footer/Footer';
import SideBar from './components/layouts/SideBar/SideBar';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    getAnonymousToken()
      .then((res) => {
        if (!localStorage.getItem('accessToken'))
          localStorage.setItem('accessToken', res.accessToken);
        if (!localStorage.getItem('refreshToken'))
          localStorage.setItem('refreshToken', res.refreshToken);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="app">
      <div className="container">
        <Header />
        <div className="main">
          <SideBar />
          <AppRouter />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
