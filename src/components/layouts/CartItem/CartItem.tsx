import React from 'react';
import { ILineItem } from '../../../types/cartTypes';
import styles from './CartItem.module.scss';
import { IoIosCloseCircle } from 'react-icons/io';
import { removeFromCart } from '../../../services/cart/removeFromCart';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../features/store';
import { addToCart } from '../../../services/cart/addToCart';

interface ICartItem {
  lineItem: ILineItem;
}

const CartItem = ({ lineItem }: ICartItem) => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.header__wrapper}>
        <h3>{lineItem.variant.sku}</h3>
        <button
          className={styles.close}
          onClick={() => {
            dispatch(
              removeFromCart({
                lineItemId: lineItem.id,
                quantity: lineItem.quantity,
              }),
            );
          }}
        >
          <IoIosCloseCircle size={20} color="#ff0000" />
        </button>
      </div>
      <div className={styles.content__wrapper}>
        <img
          src={lineItem.variant.images[0].url}
          alt={lineItem.variant.sku}
          className={styles.img}
        />
        <div className={styles.price__wrapper}>
          <span>
            {(
              (lineItem.price.value.centAmount / 100) *
              lineItem.quantity
            ).toLocaleString('US', {
              currency: 'USD',
              style: 'currency',
            })}
          </span>
          <div className={styles.button__wrapper}>
            <button
              className="button"
              onClick={() => {
                dispatch(removeFromCart({ lineItemId: lineItem.id }));
              }}
            >
              -
            </button>
            <h3>{lineItem.quantity}</h3>
            <button
              className="button"
              onClick={() => {
                dispatch(
                  addToCart({
                    productId: lineItem.productId,
                    productVariant: lineItem.variant.id,
                  }),
                );
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
