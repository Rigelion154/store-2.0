import axios from 'axios';
import { apiConstants } from '../utils/constants/apiConstants';

const baseURL = `${apiConstants.authUrl}/oauth/`;

export const $tokenApi = axios.create({
  baseURL,
});

$tokenApi.interceptors.request.use((config) => {
  config.headers.Authorization = `Basic ${btoa(
    `${apiConstants.clientId}:${apiConstants.clientSecret}`,
  )}`;
  config.headers.setContentType('application/x-www-form-urlencoded');
  return config;
});
