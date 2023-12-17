import React, { useEffect, useState } from 'react';
import { MasterData } from '../../types/productsType';
import { useInView } from 'react-intersection-observer';
import { getFilteredProducts } from '../../services/products/getFilteredProducts';
import LoaderBar from '../../components/ui/LoaderBar/LoaderBar';
import ProductCard from '../../components/layouts/ProductCard/ProductCard';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';

const Category = () => {
  const { categories } = useSelector((state: RootState) => state.categories);
  const { category, subCategory, slug } = useParams();
  const [products, setProducts] = useState<MasterData[]>([]);
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setProducts([]);
    setOffset(0);
    getFilteredProducts({
      categoryId: categories[subCategory || (category as string)],
      offset: 0,
    }).then((res) => {
      setProducts(res);
      setOffset((prev) => prev + 3);
    });
    window.scrollTo(0, 0);
  }, [category, subCategory, slug]);

  useEffect(() => {
    if (inView) {
      getFilteredProducts({
        categoryId: categories[subCategory || (category as string)],
        offset,
      }).then((res) => {
        setProducts((prev) => [...prev, ...res]);
        setOffset((prev) => prev + 3);
      });
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

export default Category;
