import axios, { AxiosResponse } from 'axios';
import { apiConstants, apiScopes } from '../constants/apiConstants';

interface ITokenResponse {
  refresh_token: string;
  access_token: string;
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

  const access = response.data.access_token;
  const refresh = response.data.refresh_token;

  return { access, refresh };
}
