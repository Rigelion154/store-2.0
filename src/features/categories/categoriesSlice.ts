import { createSlice } from '@reduxjs/toolkit';
import { CategoriesState } from './categoriesTypes';
import { getCategories } from './categoriesThunk';

const initialState: CategoriesState = {
  categoriesArray: [],
  subCategoriesArray: [],
  loading: false,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.categoriesArray = payload.filter((el) => el.ancestors.length === 0);
      state.subCategoriesArray = payload.filter(
        (el) => el.ancestors.length > 0,
      );
      state.loading = false;
    });
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    });
  },
});
