import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import { RootState } from '../../features/store';

import ProductCard from '../../components/layouts/ProductCard/ProductCard';

import styles from './Products.module.scss';

const Products = () => {
  const { current, slug } = useParams();
  const location = useLocation();
  const { pathname } = location;
  const { productsArray } = useSelector((state: RootState) => state.products);

  const categoryProducts = productsArray.filter(
    (el) => el.masterVariant.attributes[2].value === current,
  );
  const subCategoryProducts = productsArray.filter(
    (el) => el.key.split('_')[0] === slug,
  );
  const currentProducts =
    pathname === '/categories'
      ? productsArray
      : subCategoryProducts.length > 0
      ? subCategoryProducts
      : categoryProducts;

  return (
    <div className={styles.container}>
      {currentProducts.map((el) => (
        <ProductCard key={el.id} product={el}></ProductCard>
      ))}
    </div>
  );
};

export default Products;
