import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiConstants } from '../../utils/constants/apiConstants';
import axios from 'axios';
import { MasterData } from '../../types/productsType';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const baseUrl = `${apiConstants.apiUrl}/${apiConstants.projectKey}/product-projections`;
    const token = localStorage.getItem('accessToken');

    const response = await axios(baseUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.results;
  },
);

interface CategoriesState {
  productsArray: MasterData[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: CategoriesState = {
  productsArray: [],
  loading: 'idle',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.productsArray = payload;
    });
  },
});
