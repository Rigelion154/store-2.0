import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import ProductCard from '../../components/layouts/ProductCard/ProductCard';
import styles from './Sale.module.scss';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { MasterData } from '../../types/productsType';

const Sale = () => {
  const location = useLocation();
  const { pathname } = location;
  const { saleProducts, lessThenProducts, randomProducts } = useSelector(
    (state: RootState) => state.products,
  );
  const [products, setProducts] = useState<MasterData[]>([]);

  useEffect(() => {
    if (pathname === ROUTES.SALE) setProducts(saleProducts);
    if (pathname === ROUTES.LEES_THEN) setProducts(lessThenProducts);
    if (pathname === ROUTES.TRENDING) setProducts(randomProducts);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Sale;
