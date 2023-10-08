import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import ProductCard from '../../components/layouts/ProductCard/ProductCard';

const SubCategory = () => {
  const { slug } = useParams();
  console.log(slug);
  const productsArray = useSelector(
    (state: RootState) => state.products.productsArray,
  );
  const filteredProducts = productsArray.filter(
    (el) => el.key.split('_')[0] === slug,
  );

  console.log(filteredProducts);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '20px',
        flexGrow: 1,
      }}
    >
      {filteredProducts.map((el) => (
        <ProductCard key={el.id} product={el}></ProductCard>
      ))}
    </div>
  );
};

export default SubCategory;
