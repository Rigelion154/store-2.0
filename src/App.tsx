import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from './features/store';
import { getCategories } from './features/categories/categoriesSlice';
import getAnonymousToken from './utils/services/getAnonymousToken';

import AppRouter from './routes/appRouter/AppRouter';
import Header from './components/layouts/Header/Header';
import Footer from './components/layouts/Footer/Footer';
import SideBar from './components/layouts/SideBar/SideBar';
import { getProducts } from './features/products/productsSlice';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAnonymousToken();
      if (!localStorage.getItem('accessToken'))
        localStorage.setItem('accessToken', res.accessToken);
      if (!localStorage.getItem('refreshToken'))
        localStorage.setItem('refreshToken', res.refreshToken);
    };

    async function fetchAllData() {
      setLoading(true);
      await fetchData();
      await dispatch(getCategories());
      await dispatch(getProducts());
    }

    fetchAllData()
      .then(() => {})
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

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
