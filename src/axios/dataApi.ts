import axios from 'axios';
import { apiConstants } from '../utils/constants/apiConstants';
import refreshAnonymousToken from '../utils/services/refreshAnonymousToken';

const baseURL = `${apiConstants.apiUrl}/${apiConstants.projectKey}/`;

export const $dataApi = axios.create({
  baseURL,
});

$dataApi.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    'accessToken',
  )}`;
  return config;
});

$dataApi.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      error.config._isRetry = true;
      const refreshToken = localStorage.getItem('refreshToken');
      const refreshedAccessToken = await refreshAnonymousToken(refreshToken);
      localStorage.setItem('accessToken', refreshedAccessToken);
      return $dataApi.request(error.config);
    }
    throw error;
  },
);
