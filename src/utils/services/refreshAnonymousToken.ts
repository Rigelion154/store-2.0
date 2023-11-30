import { apiConstants } from '../constants/apiConstants';
import axios, { AxiosResponse } from 'axios';

interface ITokenResponse {
  access_token: string;
}

export default async function refreshAnonymousToken(
  refreshToken: string | null,
) {
  const authUrl = `${apiConstants.authUrl}/oauth/token`;
  const authData = `grant_type=refresh_token&refresh_token=${refreshToken}`;
  const authHeader = `Basic ${btoa(
    `${apiConstants.clientId}:${apiConstants.clientSecret}`,
  )}`;

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

  return response.data.access_token;
}
