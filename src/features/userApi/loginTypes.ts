export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  customer: {
    id: string;
  };
}

export interface ILoginState {
  isAuth: boolean;
  customerId: string;
  loading: boolean;
  error: string | undefined;
}
