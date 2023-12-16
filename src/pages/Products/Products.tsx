import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';

import { RootState } from '../../features/store';
import { getFilteredProducts } from '../../services/Products/getFilteredProducts';

import { MasterData } from '../../types/productsType';
import ProductCard from '../../components/layouts/ProductCard/ProductCard';
import LoaderBar from '../../components/ui/LoaderBar/LoaderBar';

import styles from './Products.module.scss';

const Products = () => {
  const { category, subCategory, slug } = useParams();
  const { categories } = useSelector((state: RootState) => state.categories);
  const [products, setProducts] = useState<MasterData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState('');

  const getProductsData = useCallback(async () => {
    setLoading(true);
    try {
      let params = {};
      if (slug) {
        params = { slug: slug };
      } else if (subCategory) {
        params = { categoryId: categories[subCategory] };
      } else if (category) {
        params = { categoryId: categories[category] };
      }
      const response = await getFilteredProducts(params);
      setProducts(response);
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err.response?.data.message);
      }
      if (err instanceof Error) {
        setError(err.message);
      }
    }
    window.scrollTo(0, 0);
    setLoading(false);
  }, [category, subCategory, slug]);

  useEffect(() => {
    getProductsData().catch(() => {});
  }, [category, subCategory, slug]);

  return (
    <>
      {loading ? (
        <div className="loader__wrapper">
          <LoaderBar />
        </div>
      ) : error ? (
        <div className="loader__wrapper">
          <h2 className="error__message">Something went wrong! {error}</h2>
        </div>
      ) : (
        <div className={styles.container}>
          {products.map((el) => (
            <ProductCard key={el.id} product={el} />
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
