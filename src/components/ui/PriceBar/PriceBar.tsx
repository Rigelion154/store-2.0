import React from 'react';

import { IProductProps } from '../../../types/productsType';

import styles from './PriceBar.module.scss';

const PriceBar = ({ product }: IProductProps) => {
  const price = product.masterVariant.prices[0].value.centAmount / 100;
  const discount =
    product.masterVariant.prices[0].discounted &&
    product.masterVariant.prices[0].discounted.value.centAmount / 100;

  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default PriceBar;
