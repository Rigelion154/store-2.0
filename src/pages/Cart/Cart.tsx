import React from 'react';
import { RootState } from '../../features/store';
import { useSelector } from 'react-redux';
import CartItem from '../../components/layouts/CartItem/CartItem';
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { lineItems } = useSelector((state: RootState) => state.cart);
  return (
    <div className={`${styles.container} section`}>
      {lineItems.length > 0 ? (
        lineItems.map((item) => <CartItem key={item.id} lineItem={item} />)
      ) : (
        <div className={styles.link__wrapper}>
          <h2>Card is empty</h2>
          <h3>
            Go to{' '}
            <Link to="/categories/smartphones" className={styles.link}>
              Smartphones
            </Link>
          </h3>
          <h3>
            Go to{' '}
            <Link to="/categories/laptops" className={styles.link}>
              Laptops
            </Link>
          </h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
