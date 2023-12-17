import { createSlice } from '@reduxjs/toolkit';
import { CategoriesState } from './productTypes';
import { getProducts } from './productThunk';

const initialState: CategoriesState = {
  productsArray: [],
  lessThenProducts: [],
  saleProducts: [],
  randomProducts: [],
  searchedProducts: [],
  loading: false,
  error: '',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchedProducts(state, { payload }) {
      state.searchedProducts = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.productsArray = payload;
      state.lessThenProducts = payload.filter(
        (el) => el.masterVariant.prices[0].value.centAmount < 50000,
      );
      state.saleProducts = payload.filter(
        (el) => el.masterVariant.prices[0].discounted,
      );
      state.randomProducts = payload
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);
      state.loading = false;
    });
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
  },
});

export const { setSearchedProducts } = productsSlice.actions;
