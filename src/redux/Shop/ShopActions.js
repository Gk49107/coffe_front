import ShopTypes from "./ShopActionTypes";

//----------------team list GET--------------------
export const getShopListRequest = (payload) => ({
  type: ShopTypes.GET_SHOP_LIST_REQUEST,
  payload: payload,
});

export const getShopListResponse = (payload) => ({
  type: ShopTypes.GET_SHOP_LIST_RESPONSE,
  payload: payload,
});
//----------------Dash list GET--------------------

export const getShopByIdRequest = (id) => ({
  type: ShopTypes.GET_SHOP_BY_ID_REQUEST,
  id: id,
});

export const getShopByIdResponse = (payload) => ({
  type: ShopTypes.GET_SHOP_BY_ID_RESPONSE,
  payload: payload,
});

export const getShopByIdResponseClear = () => ({
  type: ShopTypes.GET_SHOP_BY_ID_RESPONSE_CLEAR,
});
//----------------team POST--------------------------
export const postShopRequest = (payload) => ({
  type: ShopTypes.POST_SHOP_REQUEST,
  payload: payload,
});

export const postShopResponse = (payload) => ({
  type: ShopTypes.POST_SHOP_RESPONSE,
  payload: payload,
});

export const postShopResponseClear = () => ({
  type: ShopTypes.POST_SHOP_RESPONSE_CLEAR,
});

export const postCartRequest = (payload) => ({
  type: ShopTypes.POST_CARD_REQUEST,
  payload: payload,
});

export const postCartResponse = (payload) => ({
  type: ShopTypes.POST_CARD_RESPONSE,
  payload: payload,
});

export const postCartResponseClear = () => ({
  type: ShopTypes.POST_CARD_RESPONSE_CLEAR,
});

//----------------team PUT----------------------------
export const putShopRequest = (payload, id) => ({
  type: ShopTypes.PUT_SHOP_REQUEST,
  payload: payload,
  id: id,
});

export const putShopResponse = (payload) => ({
  type: ShopTypes.PUT_SHOP_RESPONSE,
  payload: payload,
});

export const putShopResponseClear = () => ({
  type: ShopTypes.PUT_SHOP_RESPONSE_CLEAR,
});

//--------------team DELETE----------------------------
export const deleteShopRequest = (id) => ({
  type: ShopTypes.DELETE_SHOP_REQUEST,
  id: id,
});

export const deleteShopResponse = (payload) => ({
  type: ShopTypes.DELETE_SHOP_RESPONSE,
  payload: payload,
});

export const deleteShopResponseClear = () => ({
  type: ShopTypes.DELETE_SHOP_RESPONSE_CLEAR,
});
