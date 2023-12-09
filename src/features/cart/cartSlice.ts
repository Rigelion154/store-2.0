import { createSlice } from '@reduxjs/toolkit';
import { createCart } from '../../services/cart/createCart';
import { getCartById } from '../../services/cart/getCartById';
import { ICart } from '../../services/cart/cartTypes';
import { addToCart } from '../../services/cart/addToCart';
import { removeFromCart } from '../../services/cart/removeFromCart';
import { getActiveCarts } from '../../services/cart/getCarts';

const initialState: ICart = {
  id: '',
  version: 0,
  lineItems: [],
  cartState: '',
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    removeCart(state) {
      state.lineItems.length = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createCart.fulfilled, (state, { payload }) => {
      localStorage.setItem('cartId', payload.id);
      state.id = payload.id;
      state.version = payload.version;
      state.lineItems = payload.lineItems;
    });
    builder.addCase(getCartById.fulfilled, (state, { payload }) => {
      state.id = payload.id;
      state.version = payload.version;
      state.lineItems = payload.lineItems;
    });
    builder.addCase(addToCart.fulfilled, (state, { payload }) => {
      state.lineItems = payload.lineItems;
      state.version = payload.version;
    });
    builder.addCase(removeFromCart.fulfilled, (state, { payload }) => {
      state.lineItems = payload.lineItems;
      state.version = payload.version;
    });
    builder.addCase(getActiveCarts.fulfilled, (state, { payload }) => {
      localStorage.setItem('cartId', payload.id);
      state.id = payload.id;
      state.version = payload.version;
      state.lineItems = payload.lineItems;
    });
  },
});

export const { removeCart } = cartSlice.actions;
