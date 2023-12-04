import React from 'react';

import { MasterData } from '../../../types/productsType';
import { Link } from 'react-router-dom';
import './product-bar.scss';

const ProductBar = ({
  productsArray,
  title,
}: {
  productsArray: MasterData[];
  title: string;
}) => {
  return (
    <section className="section trending">
      <h2 className="trending__title">{title}</h2>
      <div className="trending__products">
        {productsArray.map((el) => {
          const price = el.masterVariant.prices[0]?.value.centAmount / 100;
          const discount =
            el.masterVariant.prices[0].discounted &&
            el.masterVariant.prices[0].discounted?.value.centAmount / 100;
          const randomPurchases = Math.floor(Math.random() * 50);

          return (
            <div className="trending__product" key={el.id}>
              <img
                className="trending__products-img"
                src={el.masterVariant.images[0].url}
                alt={el.key}
              />
              <div className="trending__products-description">
                <div className="trending__products-header">
                  <h4 className="trending__products-title">
                    {el.masterVariant.sku}
                  </h4>
                  <Link
                    to={`/categories/${el.masterVariant.attributes[2]?.value}`}
                  >
                    <h4 className="trending__products-subtitle">
                      {el.masterVariant.attributes[2]?.value}
                    </h4>
                  </Link>
                </div>

                <div className="trending__products-footer">
                  <div className="trending__products-prices">
                    <h4 className="trending__products-price">
                      {discount &&
                        discount.toLocaleString('US', {
                          style: 'currency',
                          currency: 'USD',
                          maximumFractionDigits: 0,
                        })}
                    </h4>
                    <h4
                      className={`${
                        !discount
                          ? 'trending__products-price'
                          : 'trending__products-discount'
                      }`}
                    >
                      {price.toLocaleString('US', {
                        style: 'currency',
                        currency: 'USD',
                        maximumFractionDigits: 0,
                      })}
                    </h4>
                  </div>
                  <div className="trending__products-purchases">
                    {randomPurchases} peoples purchases
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button type="button" className="button">
        See more
      </button>
    </section>
  );
};

export default ProductBar;
