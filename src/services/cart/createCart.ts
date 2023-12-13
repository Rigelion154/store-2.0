import { $dataApi } from '../../axios/dataApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICart } from '../../types/cartTypes';

export const createCart = createAsyncThunk('cartSlice/createCart', async () => {
  const cartData = {
    currency: 'USD',
  };
  const response = await $dataApi.post<ICart>('me/carts', cartData);
  const { id, version, lineItems } = response.data;
  return { id, version, lineItems };
});
