import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiConstants } from '../../utils/constants/apiConstants';
import { ICategoriesResponse, ICategory } from '../../types/categoriesType';

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, thunkAPI) => {
    try {
      const baseUrl = `${apiConstants.apiUrl}/${apiConstants.projectKey}/categories`;
      const token = localStorage.getItem('accessToken');
      const response = await axios.get<ICategoriesResponse>(baseUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { results } = response.data;

      return results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

interface CategoriesState {
  categoriesArray: ICategory[];
  subCategoriesArray: ICategory[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: CategoriesState = {
  categoriesArray: [],
  subCategoriesArray: [],
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
    builder.addCase(getCategories.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.categoriesArray = payload.filter((el) => el.ancestors.length === 0);
      state.subCategoriesArray = payload.filter(
        (el) => el.ancestors.length > 0,
      );
      state.loading = 'succeeded';
    });
    builder.addCase(getCategories.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

// export const { getSubcategory } = categoriesSlice.actions;
