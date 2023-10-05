import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiConstants } from '../../utils/constants/apiConstants';
import { ICategoriesResponse, ICategory } from '../../types/categoriesType';

const baseUrl = `${apiConstants.apiUrl}/${apiConstants.projectKey}/categories`;
const token = localStorage.getItem('accessToken');

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const response = await axios.get<ICategoriesResponse>(baseUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { results } = response.data;

    return results;
  },
);

interface CategoriesState {
  categoriesArray: ICategory[];
  categoryArray: ICategory[];
  subCategoriesArray: ICategory[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: CategoriesState = {
  categoriesArray: [],
  subCategoriesArray: [],
  categoryArray: [],
  loading: 'idle',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    // getSubcategory: (state) => {
    //   state.categoryArray = state.categoryResponse.filter(
    //     (el) => el.ancestors.length > 0,
    //   );
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.categoriesArray = payload.filter((el) => el.ancestors.length === 0);
      state.subCategoriesArray = payload.filter(
        (el) => el.ancestors.length > 0,
      );
    });
  },
});

// export const { getSubcategory } = categoriesSlice.actions;
