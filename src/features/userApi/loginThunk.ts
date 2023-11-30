import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginRequest, ILoginResponse } from './loginTypes';
import { $dataApi } from '../../axios/dataApi';

export const userSignIn = createAsyncThunk(
  'userLogin/userSignIn',
  async ({ email, password }: ILoginRequest) => {
    const token = localStorage.getItem('accessToken');
    const data = { email, password };
    const response = await $dataApi.post<ILoginResponse>('login', data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const { id } = response.data.customer;
    return id;
  },
);
