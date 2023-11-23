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
    const getToken = async () => {
      const accessToken = await getAnonymousToken();
      localStorage.setItem('accessToken', accessToken);
    };

    async function fetchData() {
      setLoading(true);
      await getToken();
      await dispatch(getCategories());
      await dispatch(getProducts());
    }

    fetchData()
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
