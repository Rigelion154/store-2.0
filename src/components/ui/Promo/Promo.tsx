import React from 'react';

import './Promo.module.scss';
import PROMO from '../../../assets/PROMO.png';
import AsideBar from '../../layouts/Aside/AsideBar';

import styles from './Promo.module.scss';
import { Link } from 'react-router-dom';

const Promo = () => {
  return (
    <section className={styles.promo}>
      <div className={`${styles.promo__Links} section`}>
        <AsideBar />
      </div>
      <div className={`${styles.promo__container} section`}>
        <h2 className={styles.promo__title}>BIG SALE 20%</h2>
        <div className={styles.promo__content}>
          <div className={styles.promo__description}>
            <h3 className={styles.promo__description__subtitle}>
              the bestseller of 2022
            </h3>
            <h3 className={styles.promo__description__title}>
              ASUS ROG <br /> with NVIDIA 4090 TI
            </h3>
            <Link
              to={'/categories/laptops/asus/asus-rog-strix'}
              className="promo__description-button button"
              type="button"
            >
              Shop Now
            </Link>
          </div>
          <img src={PROMO} alt="promo" className={styles.promo__img} />
        </div>
      </div>
    </section>
  );
};

export default Promo;
