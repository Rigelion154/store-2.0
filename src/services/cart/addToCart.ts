import { createAsyncThunk } from '@reduxjs/toolkit';
import { $dataApi } from '../../axios/dataApi';
import { RootState } from '../../features/store';
import { ICart } from '../../types/cartTypes';

interface IAddRequest {
  productId: string;
  productVariant: number;
}

export const addToCart = createAsyncThunk(
  'cartSlice/addToCart',
  async ({ productId, productVariant }: IAddRequest, { getState }) => {
    const state = getState() as RootState;
    const cartData = {
      version: state.cart.version,
      actions: [
        {
          action: 'addLineItem',
          productId,
          variantId: productVariant,
          quantity: 1,
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
