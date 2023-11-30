import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  apiConstants,
  authHeader,
  scope,
} from '../../utils/constants/apiConstants';

interface ITokenResponse {
  refresh_token: string;
  access_token: string;
}

export const getAnonymousTokenSlice = createAsyncThunk(
  'tokenSlice/getAnonymousToken',
  async () => {
    const authUrl = `${apiConstants.authUrl}/oauth/${apiConstants.projectKey}/anonymous/token`;
    const authData = `grant_type=client_credentials&scope=${scope}`;

    const response = await axios.post<ITokenResponse>(authUrl, authData, {
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const access = response.data.access_token;
    const refresh = response.data.refresh_token;

    return { access, refresh };
  },
);

interface ITokenState {
  accessToken: string;
  refreshToken: string;
}

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
