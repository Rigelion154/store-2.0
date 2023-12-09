import { $dataApi } from '../../axios/dataApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IUser {
  customer: {
    id: string;
  };
}

interface ISignInRequest {
  email: string;
  password: string;
}

export const userSignIn = createAsyncThunk(
  'userSlice/userSignIn',
  async ({ email, password }: ISignInRequest) => {
    const anonymousCart = {
      id: `${localStorage.getItem('cartId')}`,
      typeId: 'cart',
    };
    const data = { email, password, anonymousCart };
    const response = await $dataApi.post<IUser>('me/login', data);
    const { id } = response.data.customer;

    return id;
  },
);
