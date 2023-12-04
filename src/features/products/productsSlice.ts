import { createSlice } from '@reduxjs/toolkit';
import { CategoriesState } from './productTypes';
import { getProducts } from './productThunk';

const initialState: CategoriesState = {
  productsArray: [],
  loading: false,
  error: '',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.productsArray = payload;
      state.loading = true;
    });
  },
});
