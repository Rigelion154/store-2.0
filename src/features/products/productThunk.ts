import { createAsyncThunk } from '@reduxjs/toolkit';
import { $dataApi } from '../../axios/dataApi';
import { IProductsResponse } from './productTypes';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await $dataApi<IProductsResponse>('product-projections', {
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      // },
    });
    const { results } = await response.data;
    return results;
  },
);
