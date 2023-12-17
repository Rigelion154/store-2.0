import { $dataApi } from '../../axios/dataApi';
import { ICart } from '../../types/cartTypes';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IGetCartsResponse {
  results: ICart[];
}

export const getActiveCarts = createAsyncThunk(
  'cartSlice/getActiveCarts',
  async () => {
    const response = await $dataApi<IGetCartsResponse>('me/carts?limit=100');
    const currentCart = await response.data.results.filter(
      (el) => el.cartState === 'Active',
    );
    const { id, version, lineItems } = currentCart[0];
    return { id, version, lineItems };
  },
);

export const getCarts = async () => {
  const response = await $dataApi<IGetCartsResponse>('me/carts?limit=100');
  return response.data.results;
};
