import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiConstants, scope } from '../../utils/constants/apiConstants';
import { $tokenApi } from '../../axios/tokenApi';
import { ITokenResponse } from './tokenTypes';

export const getAnonymousTokenSlice = createAsyncThunk(
  'tokenSlice/getAnonymousToken',
  async () => {
    const baseUrl = `${apiConstants.projectKey}/anonymous/token`;
    const authData = `grant_type=client_credentials&scope=${scope}`;

    const response = await $tokenApi.post<ITokenResponse>(baseUrl, authData);

    const access = response.data.access_token;
    const refresh = response.data.refresh_token;

    return { access, refresh };
  },
);
