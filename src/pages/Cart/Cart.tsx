import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../../features/store';

import CartItem from '../../components/layouts/CartItem/CartItem';
import { cartLinks } from '../../utils/constants/cartLinks';

import styles from './Cart.module.scss';

const Cart = () => {
  const { lineItems } = useSelector((state: RootState) => state.cart);
  return (
    <div className={`page__container section`}>
      {lineItems.length > 0 ? (
        lineItems.map((item) => <CartItem key={item.id} lineItem={item} />)
      ) : (
        <div className={styles.link__wrapper}>
          <h3>Card is empty</h3>
          {cartLinks.map((link) => (
            <div key={link.title}>
              <span>Go to </span>
              <Link to={link.path} className={styles.link}>
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
