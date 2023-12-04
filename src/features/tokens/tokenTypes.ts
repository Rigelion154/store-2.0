export interface ITokenResponse {
  refresh_token: string;
  access_token: string;
}

export interface ITokenState {
  accessToken: string;
  refreshToken: string;
}
