import { createAsyncThunk } from '@reduxjs/toolkit';
import { $dataApi } from '../../axios/dataApi';
import { ICategoriesResponse } from './categoriesTypes';

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, thunkAPI) => {
    try {
      const response = await $dataApi.get<ICategoriesResponse>('categories');
      const { results } = response.data;
      return results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
