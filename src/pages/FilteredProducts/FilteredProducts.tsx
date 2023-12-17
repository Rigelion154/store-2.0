import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import ProductCard from '../../components/layouts/ProductCard/ProductCard';
import styles from './FilteredProducts.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { MasterData } from '../../types/productsType';

const FilteredProducts = () => {
  const { pathname } = useLocation();
  const { saleProducts, lessThenProducts, randomProducts, searchedProducts } =
    useSelector((state: RootState) => state.products);
  const [products, setProducts] = useState<MasterData[]>([]);

  useEffect(() => {
    if (pathname === ROUTES.SALE) setProducts(saleProducts);
    if (pathname === ROUTES.LEES_THEN) setProducts(lessThenProducts);
    if (pathname === ROUTES.TRENDING) setProducts(randomProducts);
    if (pathname === ROUTES.SEARCH) setProducts(searchedProducts);
    window.scrollTo(0, 0);
  }, [pathname, searchedProducts]);

  return (
    <div className={styles.container}>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className={styles.link__wrapper}>
          <h3>Searched products is not found!</h3>
          <div>
            <span>Go to </span>
            <Link to={'/categories'} className={styles.link}>
              Categories
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilteredProducts;
