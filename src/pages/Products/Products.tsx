import React from 'react';
import ProductCard from '../../components/layouts/ProductCard/ProductCard';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';

import styles from './Products.module.scss';

const Products = () => {
  const { current, slug } = useParams();
  const { productsArray } = useSelector((state: RootState) => state.products);
  const categoryProducts = productsArray.filter(
    (el) => el.masterVariant.attributes[2].value === current,
  );
  const subCategoryProducts = productsArray.filter(
    (el) => el.key.split('_')[0] === slug,
  );
  const currentProducts =
    subCategoryProducts.length > 0 ? subCategoryProducts : categoryProducts;

  return (
    <div className={styles.container}>
      {currentProducts.map((el) => (
        <ProductCard key={el.id} product={el}></ProductCard>
      ))}
    </div>
  );
};

export default Products;
