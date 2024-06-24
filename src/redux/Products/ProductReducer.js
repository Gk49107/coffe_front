import ProductTypes from "./ProductActionTypes";

const initialState = {
  getProductLoading: false,
  getProductResponse: null,

  getProductByidLoading: false,
  getProductByidResponse: null,
  postProductLoading: false,
  postProductResponse: null,
  putProductLoading: false,
  putProductResponse: null,
  deleteProductLoading: false,
  deleteProductResponse: null,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductTypes.GET_PRODUCT_LIST_REQUEST:
      return {
        ...state,
        getProductLoading: true,
      };
    case ProductTypes.GET_PRODUCT_LIST_RESPONSE:
      return {
        ...state,
        getProductLoading: false,
        getProductResponse: action.payload,
      };

    case ProductTypes.GET_PRODUCT_BY_ID_REQUEST:
      return {
        ...state,
        getProductByidLoading: true,
      };
    case ProductTypes.GET_PRODUCT_BY_ID_RESPONSE:
      return {
        ...state,
        getProductByidLoading: false,
        getProductByidResponse: action.payload,
      };
    case ProductTypes.GET_PRODUCT_BY_ID_RESPONSE_CLEAR:
      return {
        ...state,
        getProductByidResponse: null,
      };
    case ProductTypes.POST_PRODUCT_REQUEST:
      return {
        ...state,
        postProductLoading: true,
      };
    case ProductTypes.POST_PRODUCT_RESPONSE:
      return {
        ...state,
        postProductLoading: false,
        postProductResponse: action.payload,
      };
    case ProductTypes.POST_PRODUCT_RESPONSE_CLEAR:
      return {
        ...state,
        postProductResponse: null,
      };
    case ProductTypes.PUT_PRODUCT_REQUEST:
      return {
        ...state,
        putProductLoading: true,
      };
    case ProductTypes.PUT_PRODUCT_RESPONSE:
      return {
        ...state,
        putProductLoading: false,
        putProductResponse: action.payload,
      };
    case ProductTypes.PUT_PRODUCT_RESPONSE_CLEAR:
      return {
        ...state,
        putProductResponse: null,
      };
    case ProductTypes.DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        deleteProductLoading: true,
      };
    case ProductTypes.DELETE_PRODUCT_RESPONSE:
      return {
        ...state,
        deleteProductLoading: false,
        deleteProductResponse: action.payload,
      };
    case ProductTypes.DELETE_PRODUCT_RESPONSE_CLEAR:
      return {
        ...state,
        deleteProductResponse: null,
      };
    default:
      return state;
  }
};

export default ProductReducer;
