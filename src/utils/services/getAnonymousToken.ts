import axios, { AxiosResponse } from 'axios';
import { apiConstants, apiScopes } from '../constants/apiConstants';
// import { IToken } from '../../types/types

export default async function getAnonymousToken() {
  const scope = Object.values(apiScopes).join(' ');
  const authUrl = `${apiConstants.authUrl}/oauth/${apiConstants.projectKey}/anonymous/token`;
  const authHeader = `Basic ${btoa(
    `${apiConstants.clientId}:${apiConstants.clientSecret}`,
  )}`;
  const authData = `grant_type=client_credentials&scope=${scope}`;

  const response: AxiosResponse = await axios.post(authUrl, authData, {
    headers: {
      Authorization: authHeader,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  const { access_token: accessToken, refresh_token: refreshToken } =
    response.data;
  return { accessToken, refreshToken };
}
