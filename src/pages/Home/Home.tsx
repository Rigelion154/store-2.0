import React from 'react';
import { useSelector } from 'react-redux';

import { ROUTES } from '../../routes/routes';
import { RootState } from '../../features/store';

import Promo from '../../components/ui/Promo/Promo';
import ProductBar from '../../components/ui/ProductBar/ProductBar';
import SaleBar from '../../components/ui/SaleBar/SaleBar';

const Home = () => {
  const { randomProducts, lessThenProducts } = useSelector(
    (state: RootState) => state.products,
  );

  return (
    <>
      <Promo />
      <ProductBar
        productsArray={randomProducts}
        link={ROUTES.TRENDING}
        title="Trending"
      />
      <SaleBar />
      <ProductBar
        productsArray={lessThenProducts.slice(0, 5)}
        link={ROUTES.LEES_THEN}
        title="Less than 500$"
      />
    </>
  );
};

export default Home;
