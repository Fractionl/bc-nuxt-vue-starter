const ACCESSIBLE_API_ENDPOINTS = [
  'GET_getCategories',
  'GET_getProductsByCategory',
  'GET_getProductBySlug',
  'GET_getCart',
  'POST_createCart',
  'POST_addCartItem',
  'PUT_updateCartItem',
  'DELETE_deleteCartItem',
  'GET_getAllOrders',
  'GET_getAllAddresses',
  'PUT_updateAddress',
  'POST_addAddress',
  'DELETE_deleteAddress',
  'GET_searchProductByKey',
  'POST_customerLogin',
  'POST_customerRegister',
  'GET_getCheckout',
  'POST_setConsignmentToCheckout'
];

export const checkApiAccessPermission = (permission) => {
  if (ACCESSIBLE_API_ENDPOINTS.includes(permission)) {
    return true;
  } else {
    return false;
  }
};
