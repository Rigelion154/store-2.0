import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import AppRouter from './routes/appRouter/AppRouter';

import { AppDispatch } from './features/store';
import { getProducts } from './features/products/productThunk';
import { getCategories } from './features/categories/categoriesThunk';
import { getAnonymousTokenSlice } from './features/tokens/tokenThunk';

import Header from './components/layouts/Header/Header';
import Footer from './components/layouts/Footer/Footer';
import SideBar from './components/layouts/SideBar/SideBar';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchData() {
    setLoading(true);
    if (!localStorage.getItem('accessToken')) {
      await new Promise((resolve, reject) => {
        dispatch(getAnonymousTokenSlice()).then(resolve).catch(reject);
      });
    }
    await dispatch(getProducts());
    await dispatch(getCategories());
  }
  useEffect(() => {
    fetchData().finally(() => setLoading(false));
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
