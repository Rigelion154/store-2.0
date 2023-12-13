import { createSlice } from '@reduxjs/toolkit';
import { CategoriesState } from './categoriesTypes';
import { getCategories } from './categoriesThunk';

const initialState: CategoriesState = {
  categoriesArray: [],
  subCategoriesArray: [],
  loading: false,
  activeSubCategory: [],
  activeCategoryId: '',
  categories: {},
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategoryId = action.payload;
      state.activeSubCategory = state.subCategoriesArray.filter(
        (sub) => sub.ancestors[0].id === action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.categoriesArray = payload.filter((el) => el.ancestors.length === 0);
      state.subCategoriesArray = payload.filter(
        (el) => el.ancestors.length > 0,
      );
      payload.forEach((cat) => (state.categories[cat.key] = cat.id));
      state.loading = false;
    });
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    });
  },
});

export const { setActiveCategory } = categoriesSlice.actions;
