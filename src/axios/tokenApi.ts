import axios from 'axios';
import { authHeader, tokenURL } from '../utils/constants/api/apiConstants';

export const $tokenApi = axios.create({
  baseURL: tokenURL,
});

$tokenApi.interceptors.request.use((config) => {
  config.headers.Authorization = authHeader;
  config.headers.setContentType('application/x-www-form-urlencoded');
  return config;
});
