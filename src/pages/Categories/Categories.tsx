import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import ProductCard from '../../components/layouts/ProductCard/ProductCard';

const Categories = () => {
  const productsArray = useSelector(
    (state: RootState) => state.products.productsArray,
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '20px',
        flexGrow: 1,
      }}
    >
      {productsArray.map((el) => (
        <ProductCard key={el.id} product={el}></ProductCard>
      ))}
    </div>
  );
};

export default Categories;
