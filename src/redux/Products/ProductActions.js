import ProductTypes from "./ProductActionTypes";

//----------------team list GET--------------------
export const getProductListRequest = (id, category) => ({
  type: ProductTypes.GET_PRODUCT_LIST_REQUEST,
  id: id,
  category: category,
});

export const getProductListResponse = (payload) => ({
  type: ProductTypes.GET_PRODUCT_LIST_RESPONSE,
  payload: payload,
});
//----------------Dash list GET--------------------

export const getProductByIdRequest = (id) => ({
  type: ProductTypes.GET_PRODUCT_BY_ID_REQUEST,
  id: id,
});

export const getProductByIdResponse = (payload) => ({
  type: ProductTypes.GET_PRODUCT_BY_ID_RESPONSE,
  payload: payload,
});

export const getProductByIdResponseClear = () => ({
  type: ProductTypes.GET_PRODUCT_BY_ID_RESPONSE_CLEAR,
});
//----------------team POST--------------------------
export const postProductRequest = (payload) => ({
  type: ProductTypes.POST_PRODUCT_REQUEST,
  payload: payload,
});

export const postProductResponse = (payload) => ({
  type: ProductTypes.POST_PRODUCT_RESPONSE,
  payload: payload,
});

export const postProductResponseClear = () => ({
  type: ProductTypes.POST_PRODUCT_RESPONSE_CLEAR,
});

//----------------team PUT----------------------------
export const putProductRequest = (payload, id) => ({
  type: ProductTypes.PUT_PRODUCT_REQUEST,
  payload: payload,
  id: id,
});

export const putProductResponse = (payload) => ({
  type: ProductTypes.PUT_PRODUCT_RESPONSE,
  payload: payload,
});

export const putProductResponseClear = () => ({
  type: ProductTypes.PUT_PRODUCT_RESPONSE_CLEAR,
});

//--------------team DELETE----------------------------
export const deleteProductRequest = (id) => ({
  type: ProductTypes.DELETE_PRODUCT_REQUEST,
  id: id,
});

export const deleteProductResponse = (payload) => ({
  type: ProductTypes.DELETE_PRODUCT_RESPONSE,
  payload: payload,
});

export const deleteProductResponseClear = () => ({
  type: ProductTypes.DELETE_PRODUCT_RESPONSE_CLEAR,
});
