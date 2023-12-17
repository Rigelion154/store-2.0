import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';

import { getFilteredProducts } from '../../services/products/getFilteredProducts';

import { MasterData } from '../../types/productsType';
import ProductCard from '../../components/layouts/ProductCard/ProductCard';
import LoaderBar from '../../components/ui/LoaderBar/LoaderBar';

const Product = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState<MasterData[]>([]);
  const [error, setError] = useState('');

  const getProductsData = async () => {
    try {
      const response = await getFilteredProducts({ slug });
      setProducts(response);
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err.response?.data.message);
      }
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  useEffect(() => {
    getProductsData().catch();
  }, [slug]);

  return (
    <>
      {error ? (
        <div className="loader__wrapper">
          <h2 className="error__message">Something went wrong! {error}</h2>
        </div>
      ) : (
        <div className="page__container" style={{ minHeight: 'unset' }}>
          {products.length === 0 ? (
            <LoaderBar />
          ) : (
            products.map((el) => (
              <div key={el.id}>
                <ProductCard product={el} />
              </div>
            ))
          )}
        </div>
      )}
    </>
  );
};

export default Product;
