import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ILoginState } from './loginTypes';
import { userSignIn } from './loginThunk';
import { $dataApi } from '../../axios/dataApi';

const initialState: ILoginState = {
  isAuth: !!localStorage.getItem('id') || false,
  customerId: localStorage.getItem('id') || '',
  loading: false,
  error: '',
};

interface ISignUpRequest {
  firstName: string;
  email: string;
  password: string;
}

interface ISignUpResponse {
  customer: {
    addresses: string[];
    email: string;
    firstName: string;
    id: string;
    isEmailVerified: boolean;
    lastName: string;
    password: string;
    version: number;
    authenticationMode: string;
  };
}

export const userSignUp = createAsyncThunk(
  'userLogin/userSignUp',
  async (
    { firstName, email, password }: ISignUpRequest,
    { rejectWithValue },
  ) => {
    const data = { firstName, email, password };
    try {
      const response = await $dataApi.post<ISignUpResponse>('me/signup', data);

      const { id } = await response.data.customer;
      return id;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const userSlice = createSlice({
  name: 'userLogin',
  initialState,
  reducers: {
    clearErrors(state) {
      state.error = '';
    },
    logout(state) {
      state.isAuth = false;
      state.customerId = '';
      localStorage.removeItem('id');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userSignIn.fulfilled, (state, { payload }) => {
      state.customerId = payload;
      state.isAuth = true;
      state.loading = false;
      localStorage.setItem('id', payload);
    });
    builder.addCase(userSignIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userSignIn.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(userSignUp.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(userSignUp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userSignUp.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { clearErrors, logout } = userSlice.actions;
