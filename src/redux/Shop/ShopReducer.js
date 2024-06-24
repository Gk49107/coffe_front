import ShopTypes from "./ShopActionTypes";

const initialState = {
  getShopLoading: false,
  getShopResponse: null,

  getShopByidLoading: false,
  getShopByidResponse: null,
  postShopLoading: false,
  postShopResponse: null,
  postCartLoading: false,
  postCartResponse: null,
  putShopLoading: false,
  putShopResponse: null,
  deleteShopLoading: false,
  deleteShopResponse: null,
};

const ShopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ShopTypes.GET_SHOP_LIST_REQUEST:
      return {
        ...state,
        getShopLoading: true,
      };
    case ShopTypes.GET_SHOP_LIST_RESPONSE:
      return {
        ...state,
        getShopLoading: false,
        getShopResponse: action.payload,
      };

    case ShopTypes.GET_SHOP_BY_ID_REQUEST:
      return {
        ...state,
        getShopByidLoading: true,
      };
    case ShopTypes.GET_SHOP_BY_ID_RESPONSE:
      return {
        ...state,
        getShopByidLoading: false,
        getShopByidResponse: action.payload,
      };
    case ShopTypes.GET_SHOP_BY_ID_RESPONSE_CLEAR:
      return {
        ...state,
        getShopByidResponse: null,
      };
    case ShopTypes.POST_SHOP_REQUEST:
      return {
        ...state,
        postShopLoading: true,
      };
    case ShopTypes.POST_SHOP_RESPONSE:
      return {
        ...state,
        postShopLoading: false,
        postShopResponse: action.payload,
      };
    case ShopTypes.POST_SHOP_RESPONSE_CLEAR:
      return {
        ...state,
        postShopResponse: null,
      };
    case ShopTypes.POST_CARD_REQUEST:
      return {
        ...state,
        postCartLoading: true,
      };
    case ShopTypes.POST_CARD_RESPONSE:
      return {
        ...state,
        postCartLoading: false,
        postCartResponse: action.payload,
      };
    case ShopTypes.POST_CARD_RESPONSE_CLEAR:
      return {
        ...state,
        postCartResponse: null,
      };

    case ShopTypes.PUT_SHOP_REQUEST:
      return {
        ...state,
        putShopLoading: true,
      };
    case ShopTypes.PUT_SHOP_RESPONSE:
      return {
        ...state,
        putShopLoading: false,
        putShopResponse: action.payload,
      };
    case ShopTypes.PUT_SHOP_RESPONSE_CLEAR:
      return {
        ...state,
        putShopResponse: null,
      };
    case ShopTypes.DELETE_SHOP_REQUEST:
      return {
        ...state,
        deleteShopLoading: true,
      };
    case ShopTypes.DELETE_SHOP_RESPONSE:
      return {
        ...state,
        deleteShopLoading: false,
        deleteShopResponse: action.payload,
      };
    case ShopTypes.DELETE_SHOP_RESPONSE_CLEAR:
      return {
        ...state,
        deleteShopResponse: null,
      };
    default:
      return state;
  }
};

export default ShopReducer;
