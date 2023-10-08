import React from 'react';
import { MasterData } from '../../../types/productsType';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product }: { product: MasterData }) => {
  const price = product.masterVariant.prices[0].value.centAmount / 100;
  const discount =
    product.masterVariant.prices[0].discounted &&
    product.masterVariant.prices[0].discounted.value.centAmount / 100;
  return (
    <div className={`section ${styles.container}`}>
      <img
        className={styles.img}
        src={product.masterVariant.images[0].url}
        alt={product.slug['en-US']}
      />
      <div className={styles.slider__wrapper}>
        {product.masterVariant.images.slice(0, 4).map((img) => (
          <img
            src={img.url}
            alt={img.label}
            className={styles.slider__img}
            key={img.url}
          />
        ))}
      </div>
      <div>
        <h3>{product.masterVariant.sku}</h3>
        <p>
          {price.toLocaleString('US', {
            currency: 'USD',
            style: 'currency',
            maximumFractionDigits: 0,
          })}
        </p>
        {discount && (
          <p>
            {discount.toLocaleString('US', {
              currency: 'USD',
              style: 'currency',
              maximumFractionDigits: 0,
            })}
          </p>
        )}
        <h4>Color: {product.masterVariant.attributes[0].value}</h4>
        <h4>Size: {product.masterVariant.attributes[1].value}</h4>
        <p className={styles.description}>{product.description?.['en-US']}</p>
        <button className="button">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
