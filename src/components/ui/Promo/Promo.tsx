import React from 'react';

import './promo.scss';
import PROMO from '../../../assets/PROMO.png';

const Promo = () => {
  return (
    <section className="promo">
      <div className="section promo__container">
        <h2 className="promo__title">BIG SALE 20%</h2>
        <div className="promo__content">
          <div className="promo__description">
            <h3 className="promo__description-subtitle">
              the bestseller of 2022
            </h3>
            <h3 className="promo__description-title">
              LENNON r2d2 <br /> with NVIDIA 5090 TI
            </h3>
            <button className="promo__description-button button" type="button">
              Shop Now
            </button>
          </div>
          <img src={PROMO} alt="promo" className="promo__img" />
        </div>
      </div>
    </section>
  );
};

export default Promo;
