import { apiConstants, scope } from '../../utils/constants/api/apiConstants';
import { $tokenApi } from '../../axios/tokenApi';

export interface ITokenResponse {
  access_token: string;
  refresh_token: string;
}

export const getAnonymousToken = async () => {
  const authData = `grant_type=client_credentials&scope=${scope}`;
  const response = await $tokenApi.post<ITokenResponse>(
    `${apiConstants.projectKey}/anonymous/token`,
    authData,
  );

  const { access_token: accessToken, refresh_token: refreshToken } =
    response.data;

  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};
