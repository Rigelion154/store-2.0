import axios from 'axios';
import { dataURL } from '../utils/constants/api/apiConstants';
import refreshAnonymousToken from '../services/refreshAnonymousToken';

export const $dataApi = axios.create({
  baseURL: dataURL,
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
