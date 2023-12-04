import { createSlice } from '@reduxjs/toolkit';

import { ILoginState } from './loginTypes';
import { userSignIn } from './loginThunk';

const initialState: ILoginState = {
  isAuth: false,
  customerId: null,
};

export const userSlice = createSlice({
  name: 'userLogin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userSignIn.fulfilled, (state, { payload }) => {
      state.customerId = payload;
      state.isAuth = true;
    });
  },
});
