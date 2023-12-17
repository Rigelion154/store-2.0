import React, { useEffect, useState } from 'react';
import { MasterData } from '../../types/productsType';
import { getFilteredProducts } from '../../services/products/getFilteredProducts';
import { useInView } from 'react-intersection-observer';
import LoaderBar from '../../components/ui/LoaderBar/LoaderBar';
import ProductCard from '../../components/layouts/ProductCard/ProductCard';

const Categories = () => {
  const [products, setProducts] = useState<MasterData[]>([]);
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [offset, setOffset] = useState(0);

  const fetchData = async () => {
    const response = await getFilteredProducts({ offset });
    setProducts((prev) => [...prev, ...response]);
    setOffset((prev) => prev + 3);
  };

  useEffect(() => {
    fetchData().catch();
  }, []);

  useEffect(() => {
    if (inView) {
      fetchData().catch();
    }
  }, [inView]);

  return (
    <div className="page__container">
      {products.length === 0 ? (
        <LoaderBar />
      ) : (
        products.map((el, index) => (
          <div key={el.id} ref={index === products.length - 1 ? ref : null}>
            <ProductCard product={el} />
          </div>
        ))
      )}
    </div>
  );
};

export default Categories;
