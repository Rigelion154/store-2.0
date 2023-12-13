import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import AppRouter from './routes/appRouter/AppRouter';

import { AppDispatch } from './features/store';
import { getProducts } from './features/products/productThunk';
import { getCategories } from './features/categories/categoriesThunk';
import { getCarts } from './services/cart/getCarts';
import { getAnonymousToken } from './services/Auth/getAnonymousToken';
import { getCartById } from './services/cart/getCartById';

import Header from './components/layouts/Header/Header';
import Footer from './components/layouts/Footer/Footer';
import LoaderBar from './components/ui/LoaderBar/LoaderBar';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchData() {
    const cartId = localStorage.getItem('cartId');
    setLoading(true);
    if (!localStorage.getItem('accessToken')) {
      await getAnonymousToken();
    }
    if (cartId) {
      await dispatch(getCartById(cartId));
    }
    await dispatch(getCategories());
    await dispatch(getProducts());
    await getCarts();
  }

  useEffect(() => {
    fetchData().finally(() => setLoading(false));
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <div className="loader__wrapper">
          <LoaderBar />
        </div>
      ) : (
        <div className="app">
          <div className="container">
            <Header />
            <div className="main">
              <AppRouter />
            </div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
