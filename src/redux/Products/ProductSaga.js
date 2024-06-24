import { takeLatest, put, call } from "redux-saga/effects";
import ProductTypes from "./ProductActionTypes";
import {
  deleteProductResponse,
  getProductByIdResponse,
  getProductListResponse,
  postProductResponse,
  putProductResponse,
} from "./ProductActions";

import { axiosDelete, axiosGet, axiosPost, axiosPut } from "../axios";

export function* onGetProductList({ id, category }) {
  try {
    // const { filter, quickFilter = "", keyword = "", count = "" } = payload;

    // const sort = filter.sortBy.split("-");

    // const url = `product?page=${
    //   filter.page
    // }&filter=${keyword}&role=${quickFilter}&sort_by=${
    //   sort[0] ? sort[0] : ""
    // }&sort=${sort[1] ? sort[1] : ""}&count=${count}`;
    const url = `product/shop/${id}?category=${category}`;
    const response = yield call(() => axiosGet(url).then((res) => res.data));
    yield put(getProductListResponse(response));
  } catch (error) {
    yield put(getProductListResponse(error));
  }
}

export function* onGetByIdProduct({ id }) {
  try {
    const url = `product/${id}`;
    const response = yield call(() => axiosGet(url).then((res) => res.data));
    yield put(getProductByIdResponse(response));
  } catch (error) {
    yield put(getProductByIdResponse(error));
  }
}

export function* onPostProduct({ payload }) {
  try {
    const url = `product`;
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const response = yield call(() =>
      axiosPost(url, payload, config).then((res) => res.data)
    );
    yield put(postProductResponse(response));
  } catch (error) {
    yield put(postProductResponse(error));
  }
}

export function* onPutProduct({ payload, id }) {
  try {
    const url = `product/${id}`;

    const response = yield call(() =>
      axiosPut(url, payload).then((res) => res.data)
    );
    yield put(putProductResponse(response));
  } catch (error) {
    yield put(putProductResponse(error));
  }
}

export function* onDeleteProduct({ id }) {
  try {
    const url = `product/${id}`;

    const response = yield call(() => axiosDelete(url).then((res) => res.data));
    yield put(deleteProductResponse(response));
  } catch (error) {
    yield put(deleteProductResponse(error));
  }
}

export function* ProductWatcherSaga() {
  yield takeLatest(ProductTypes.GET_PRODUCT_LIST_REQUEST, onGetProductList);
  yield takeLatest(ProductTypes.GET_PRODUCT_BY_ID_REQUEST, onGetByIdProduct);
  yield takeLatest(ProductTypes.POST_PRODUCT_REQUEST, onPostProduct);
  yield takeLatest(ProductTypes.PUT_PRODUCT_REQUEST, onPutProduct);
  yield takeLatest(ProductTypes.DELETE_PRODUCT_REQUEST, onDeleteProduct);
}
