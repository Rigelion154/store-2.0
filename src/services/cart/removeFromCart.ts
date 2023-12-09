import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../features/store';
import { $dataApi } from '../../axios/dataApi';
import { ICart } from './cartTypes';

interface IRemoveFormCart {
  lineItemId: string;
  quantity?: number;
}

export const removeFromCart = createAsyncThunk(
  'cartSlice/removeFromCart',
  async ({ lineItemId, quantity }: IRemoveFormCart, { getState }) => {
    const state = getState() as RootState;
    const cartData = {
      version: state.cart.version,
      actions: [
        {
          action: 'removeLineItem',
          lineItemId,
          quantity: quantity || 1,
        },
      ],
    };

    const response = await $dataApi.post<ICart>(
      `me/carts/${state.cart.id}`,
      cartData,
    );
    const { lineItems, version } = response.data;
    return { lineItems, version };
  },
);
