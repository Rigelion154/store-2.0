const apiConstants = {
  // clientId: 'poFit2sVUdV3U57AASZRiDCV',
  clientId: 'h3LI6j7IUvxK-BdppivuVnbn',
  // clientSecret: 'u5mzdrto-ZUf019j6PiXha7Ck-BuIYzi',
  clientSecret: 'nmFt_Nj2ZY4E1GF_0DDy2z44KSgZDCpx',
  // projectKey: 'shop-v2',
  projectKey: 'shop-v2',
  authUrl: 'https://auth.europe-west1.gcp.commercetools.com',
  apiUrl: 'https://api.europe-west1.gcp.commercetools.com',
};

const apiScopes = {
  manage_customers: 'manage_customers:shop-v2',
  create_anonymous_token: 'create_anonymous_token:shop-v2',
  manage_my_profile: 'manage_my_profile:shop-v2',
  manage_my_quotes: 'manage_my_quotes:shop-v2',
  manage_my_quote_requests: 'manage_my_quote_requests:shop-v2',
  manage_my_orders: 'manage_my_orders:shop-v2',
  manage_my_payments: 'manage_my_payments:shop-v2',
  manage_my_business_units: 'manage_my_business_units:shop-v2',
  manage_my_shopping_lists: 'manage_my_shopping_lists:shop-v2',
  view_product_selections: 'view_product_selections:shop-v2',
  view_audit_log: 'view_audit_log:shop-v2',
  view_shipping_methods: 'view_shipping_methods:shop-v2',
  view_types: 'view_types:shop-v2',
  view_associate_roles: 'view_associate_roles:shop-v2',
  view_quote_requests: 'view_quote_requests:shop-v2',
  view_customer_groups: 'view_customer_groups:shop-v2',
  view_import_containers: 'view_import_containers:shop-v2',
  view_attribute_groups: 'view_attribute_groups:shop-v2',
  view_staged_quotes: 'view_staged_quotes:shop-v2',
  view_connectors: 'view_connectors:shop-v2',
  view_discount_codes: 'view_discount_codes:shop-v2',
  view_categories: 'view_categories:shop-v2',
  view_standalone_prices: 'view_standalone_prices:shop-v2',
  view_states: 'view_states:shop-v2',
  view_products: 'view_products:shop-v2',
  view_connectors_deployments: 'view_connectors_deployments:shop-v2',
  view_order_edits: 'view_order_edits:shop-v2',
  view_payments: 'view_payments:shop-v2',
  view_stores: 'view_stores:shop-v2',
  view_cart_discounts: 'view_cart_discounts:shop-v2',
  view_business_units: 'view_business_units:shop-v2',
  view_messages: 'view_messages:shop-v2',
  view_project_settings: 'view_project_settings:shop-v2',
  view_quotes: 'view_quotes:shop-v2',
  view_orders: 'view_orders:shop-v2',
  view_tax_categories: 'view_tax_categories:shop-v2',
  view_shopping_lists: 'view_shopping_lists:shop-v2',
};

const scope = Object.values(apiScopes).join(' ');

// Формат для передачи закодированных данных.//

const authHeader = `Basic ${btoa(
  `${apiConstants.clientId}:${apiConstants.clientSecret}`,
)}`;

export { apiConstants, apiScopes, scope, authHeader };
