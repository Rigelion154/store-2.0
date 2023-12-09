import { $tokenApi } from '../../axios/tokenApi';
import { apiConstants, scope } from '../../utils/constants/api/apiConstants';
import { ITokenResponse } from './getAnonymousToken';

export const getUserToken = async (email: string, password: string) => {
  const tokenData = `grant_type=password&username=${email}&password=${password}&scope=${scope}`;
  const response = await $tokenApi.post<ITokenResponse>(
    `${apiConstants.projectKey}/customers/token`,
    tokenData,
  );
  const { access_token: accessToken, refresh_token: refreshToken } =
    response.data;
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};
