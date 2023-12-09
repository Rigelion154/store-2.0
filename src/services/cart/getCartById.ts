import { $dataApi } from '../../axios/dataApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICart } from './cartTypes';

export const getCartById = createAsyncThunk(
  'cartSlice/getCartById',
  async (cartId: string) => {
    const response = await $dataApi<ICart>(`me/carts/${cartId}`);

    const { id, version, lineItems } = response.data;

    return { id, version, lineItems };
  },
);
