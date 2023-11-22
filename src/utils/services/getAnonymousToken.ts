import axios, { AxiosResponse } from 'axios';
import { apiConstants, apiScopes } from '../constants/apiConstants';
import refreshAnonymousToken from './refreshAnonymousToken';

interface ITokenResponse {
  refresh_token: string;
}

export default async function getAnonymousToken() {
  const scope = Object.values(apiScopes).join(' ');
  const authUrl = `${apiConstants.authUrl}/oauth/${apiConstants.projectKey}/anonymous/token`;
  const authHeader = `Basic ${btoa(
    `${apiConstants.clientId}:${apiConstants.clientSecret}`,
  )}`;
  const authData = `grant_type=client_credentials&scope=${scope}`;

  const response: AxiosResponse<ITokenResponse> = await axios.post(
    authUrl,
    authData,
    {
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );

  const refreshToken = response.data.refresh_token;
  return refreshAnonymousToken(refreshToken);
}
