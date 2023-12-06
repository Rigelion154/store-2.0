import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginRequest, ILoginResponse } from './loginTypes';
import { $dataApi } from '../../axios/dataApi';
import { $tokenApi } from '../../axios/tokenApi';
import { apiConstants, scope } from '../../utils/constants/apiConstants';

interface IPasswordFlowResponse {
  access_token: string;
}

export const userSignIn = createAsyncThunk(
  'userLogin/userSignIn',
  async ({ email, password }: ILoginRequest, { rejectWithValue }) => {
    const data = { email, password };
    const tokenData = `grant_type=password&username=${email}&password=${password}&scope=${scope}`;
    try {
      const tokenResponse = await $tokenApi.post<IPasswordFlowResponse>(
        `${apiConstants.projectKey}/customers/token`,
        tokenData,
      );
      const accessToken = await tokenResponse.data.access_token;
      localStorage.setItem('accessToken', accessToken);

      const response = await $dataApi.post<ILoginResponse>('me/login', data);
      const { id } = response.data.customer;
      return id;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
