import { $tokenApi } from '../../axios/tokenApi';

interface ITokenResponse {
  access_token: string;
}

export default async function refreshAnonymousToken(
  refreshToken: string | null,
) {
  const authData = `grant_type=refresh_token&refresh_token=${refreshToken}`;

  const response = await $tokenApi.post<ITokenResponse>('token', authData);

  return response.data.access_token;
}
