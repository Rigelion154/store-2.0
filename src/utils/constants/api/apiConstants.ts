import { apiScopes } from './apiScopes';

const apiConstants = {
  clientId: 'h3LI6j7IUvxK-BdppivuVnbn',
  clientSecret: 'nmFt_Nj2ZY4E1GF_0DDy2z44KSgZDCpx',
  projectKey: 'shop-v2',
  authUrl: 'https://auth.europe-west1.gcp.commercetools.com',
  apiUrl: 'https://api.europe-west1.gcp.commercetools.com',
};

const tokenURL = `${apiConstants.authUrl}/oauth/`;
const dataURL = `${apiConstants.apiUrl}/${apiConstants.projectKey}/`;

const scope = Object.values(apiScopes).join(' ');

// Формат для передачи закодированных данных.//

const authHeader = `Basic ${btoa(
  `${apiConstants.clientId}:${apiConstants.clientSecret}`,
)}`;

export { apiConstants, scope, authHeader, tokenURL, dataURL };
