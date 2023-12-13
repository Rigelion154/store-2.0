import React, { useState } from 'react';
import { IProductProps } from '../../../types/productsType';
import styles from './ProductCard.module.scss';
import PriceBar from '../../ui/PriceBar/PriceBar';
import CardButton from '../../ui/CardButton/CardButton';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }: IProductProps) => {
  const [currentImage, setCurrentImage] = useState(
    product.masterVariant.images[0].url,
  );

  return (
    <div className={`section ${styles.container}`}>
      <div className={styles.images}>
        <img
          className={styles.img}
          src={currentImage}
          alt={product.slug['en-US']}
        />
        <div className={styles.slider__wrapper}>
          {product.masterVariant.images.slice(0, 4).map((img) => (
            <img
              src={img.url}
              alt={img.label}
              className={styles.slider__img}
              key={img.url}
              onClick={() => setCurrentImage(img.url)}
            />
          ))}
        </div>
      </div>
      <div className={styles.description__container}>
        <Link
          to={`/categories/${product.masterVariant.attributes[2].value}/${
            product.key.split('_')[0]
          }/${product.slug['en-US']}`}
        >
          {product.masterVariant.sku}
        </Link>

        <PriceBar product={product} />

        <h3>
          <span className={styles.attribute__title}>Color:</span>{' '}
          {product.masterVariant.attributes[0].value}
        </h3>
        <h3>
          <span className={styles.attribute__title}>Size:</span>{' '}
          {product.masterVariant.attributes[1].value} "
        </h3>
        <p className={styles.description}>{product.description?.['en-US']}</p>

        <CardButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
