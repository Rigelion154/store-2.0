import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../../features/store';

import { createCart } from '../../../services/cart/createCart';
import { addToCart } from '../../../services/cart/addToCart';
import { removeFromCart } from '../../../services/cart/removeFromCart';

import { IProductProps } from '../../../types/productsType';

import styles from './CardButton.module.scss';

const CardButton = ({ product }: IProductProps) => {
  const [isInCart, setIsInCart] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const { lineItems } = useSelector((state: RootState) => state.cart);
  const [productInCart] = lineItems.filter(
    (cartItem) => cartItem.productId === product.id,
  );

  useEffect(() => {
    if (productInCart) setIsInCart(true);
  }, [lineItems]);

  const addToCartHandler = async () => {
    if (!localStorage.getItem('cartId')) {
      await dispatch(createCart());
    }
    await dispatch(
      addToCart({
        productId: product.id,
        productVariant: product.masterVariant.id,
      }),
    );
  };

  const removeFromCartHandler = async () => {
    if (isInCart) {
      await dispatch(removeFromCart({ lineItemId: productInCart.id }));
      setIsInCart(false);
    }
  };

  return (
    <>
      {!isInCart && (
        <button
          className={`button ${styles.button}`}
          onClick={addToCartHandler}
        >
          Add to cart
        </button>
      )}

      {isInCart && (
        <button
          className={`button ${styles.button}`}
          onClick={removeFromCartHandler}
        >
          Remove from cart
        </button>
      )}
    </>
  );
};

export default CardButton;
