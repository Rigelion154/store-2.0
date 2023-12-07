import React, { useState } from 'react';
import { MasterData } from '../../../types/productsType';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product }: { product: MasterData }) => {
  const [currentImage, setCurrentImage] = useState(
    product.masterVariant.images[0].url,
  );
  const price = product.masterVariant.prices[0].value.centAmount / 100;
  const discount =
    product.masterVariant.prices[0].discounted &&
    product.masterVariant.prices[0].discounted.value.centAmount / 100;

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
        <h2>{product.masterVariant.sku}</h2>
        <h2 className={discount ? styles.price : ''}>
          {price.toLocaleString('US', {
            currency: 'USD',
            style: 'currency',
            maximumFractionDigits: 0,
          })}
        </h2>
        {discount && (
          <h2>
            <span className={styles.discount__title}>Discount: </span>
            {discount.toLocaleString('US', {
              currency: 'USD',
              style: 'currency',
              maximumFractionDigits: 0,
            })}
          </h2>
        )}
        <h3>
          <span className={styles.attribute__title}>Color:</span>{' '}
          {product.masterVariant.attributes[0].value}
        </h3>
        <h3>
          <span className={styles.attribute__title}>Size:</span>{' '}
          {product.masterVariant.attributes[1].value} "
        </h3>
        <p className={styles.description}>{product.description?.['en-US']}</p>
        <button className={`button ${styles.button}`}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
