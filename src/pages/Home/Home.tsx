import React from 'react';

import Promo from '../../components/ui/Promo/Promo';
import ProductBar from '../../components/ui/ProductBar/ProductBar';
import Sale from '../../components/ui/Sale/Sale';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';

const Home = () => {
  const productsArray = useSelector(
    (state: RootState) => state.products.productsArray,
  );

  const randomProducts = [...productsArray]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  const filteredProducts = [...productsArray]
    .filter((el) => el.masterVariant.prices[0].value.centAmount < 50000)
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  return (
    <>
      <Promo />
      <ProductBar productsArray={randomProducts} title="Trending" />
      <Sale />
      <ProductBar productsArray={filteredProducts} title="Less than 500$" />
    </>
  );
};

export default Home;
