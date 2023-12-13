import { createAsyncThunk } from '@reduxjs/toolkit';
import { $dataApi } from '../../axios/dataApi';
import { IProductsResponse } from './productTypes';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const baseURL = 'product-projections/search';

    const response = await $dataApi<IProductsResponse>(baseURL);
    const { results } = await response.data;
    return results;
  },
);
