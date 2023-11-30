const apiConstants = {
  clientId: 'poFit2sVUdV3U57AASZRiDCV',
  clientSecret: 'u5mzdrto-ZUf019j6PiXha7Ck-BuIYzi',
  projectKey: 'commerce-shop',
  authUrl: 'https://auth.europe-west1.gcp.commercetools.com',
  apiUrl: 'https://api.europe-west1.gcp.commercetools.com',
};

const apiScopes = {
  manage_customers: 'manage_customers:commerce-shop',
  create_anonymous_token: 'create_anonymous_token:commerce-shop',
  manage_my_profile: 'manage_my_profile:commerce-shop',
  manage_my_quotes: 'manage_my_quotes:commerce-shop',
  manage_my_quote_requests: 'manage_my_quote_requests:commerce-shop',
  manage_my_orders: 'manage_my_orders:commerce-shop',
  manage_my_payments: 'manage_my_payments:commerce-shop',
  manage_my_business_units: 'manage_my_business_units:commerce-shop',
  manage_my_shopping_lists: 'manage_my_shopping_lists:commerce-shop',
  view_product_selections: 'view_product_selections:commerce-shop',
  view_audit_log: 'view_audit_log:commerce-shop',
  view_shipping_methods: 'view_shipping_methods:commerce-shop',
  view_types: 'view_types:commerce-shop',
  view_associate_roles: 'view_associate_roles:commerce-shop',
  view_quote_requests: 'view_quote_requests:commerce-shop',
  view_customer_groups: 'view_customer_groups:commerce-shop',
  view_import_containers: 'view_import_containers:commerce-shop',
  view_attribute_groups: 'view_attribute_groups:commerce-shop',
  view_staged_quotes: 'view_staged_quotes:commerce-shop',
  view_connectors: 'view_connectors:commerce-shop',
  view_discount_codes: 'view_discount_codes:commerce-shop',
  view_categories: 'view_categories:commerce-shop',
  view_standalone_prices: 'view_standalone_prices:commerce-shop',
  view_states: 'view_states:commerce-shop',
  view_products: 'view_products:commerce-shop',
  view_connectors_deployments: 'view_connectors_deployments:commerce-shop',
  view_order_edits: 'view_order_edits:commerce-shop',
  view_payments: 'view_payments:commerce-shop',
  view_stores: 'view_stores:commerce-shop',
  view_cart_discounts: 'view_cart_discounts:commerce-shop',
  view_business_units: 'view_business_units:commerce-shop',
  view_messages: 'view_messages:commerce-shop',
  view_project_settings: 'view_project_settings:commerce-shop',
  view_quotes: 'view_quotes:commerce-shop',
  view_orders: 'view_orders:commerce-shop',
  view_tax_categories: 'view_tax_categories:commerce-shop',
  view_shopping_lists: 'view_shopping_lists:commerce-shop',
};

const scope = Object.values(apiScopes).join(' ');

// Формат для передачи закодированных данных.//

const authHeader = `Basic ${btoa(
  `${apiConstants.clientId}:${apiConstants.clientSecret}`,
)}`;

export { apiConstants, apiScopes, scope, authHeader };
