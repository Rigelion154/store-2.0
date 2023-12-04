import { createSlice } from '@reduxjs/toolkit';
import { getAnonymousTokenSlice } from './tokenThunk';
import { ITokenState } from './tokenTypes';

const initialState: ITokenState = {
  accessToken: localStorage.getItem('accessToken') || '',
  refreshToken: localStorage.getItem('refreshToken') || '',
};

export const tokenSlice = createSlice({
  name: 'tokenSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAnonymousTokenSlice.fulfilled, (state, { payload }) => {
      state.accessToken = payload.access;
      localStorage.setItem('accessToken', payload.access);
      state.refreshToken = payload.refresh;
      localStorage.setItem('refreshToken', payload.refresh);
    });
  },
});
