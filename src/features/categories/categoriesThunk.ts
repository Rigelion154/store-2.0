import { createAsyncThunk } from '@reduxjs/toolkit';
import { $dataApi } from '../../axios/dataApi';
import { ICategoriesResponse } from './categoriesTypes';

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await $dataApi.get<ICategoriesResponse>('categories');
      const { results } = response.data;
      console.log(results);
      return results;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
