import { takeLatest, put, call } from "redux-saga/effects";
import ShopTypes from "./ShopActionTypes";
import {
  deleteShopResponse,
  getShopByIdResponse,
  getShopListResponse,
  postCartResponse,
  postShopResponse,
  putShopResponse,
} from "./ShopActions";

import { axiosDelete, axiosGet, axiosPost, axiosPut } from "../axios";

export function* onGetShopList({ payload }) {
  try {
    const {
      filter,
      quickFilter = "",
      keyword = "",
      count = "",
      search = "",
    } = payload;

    // const sort = filter.sortBy.split("-");

    // const url = `shop?page=${
    //   filter.page
    // }&filter=${keyword}&role=${quickFilter}&sort_by=${
    //   sort[0] ? sort[0] : ""
    // }&sort=${sort[1] ? sort[1] : ""}&count=${count}`;
    const url = `shop?search=${search}`;
    const response = yield call(() => axiosGet(url).then((res) => res.data));
    yield put(getShopListResponse(response));
  } catch (error) {
    yield put(getShopListResponse(error));
  }
}

export function* onGetByIdShop({ id }) {
  try {
    const url = `shop/${id}`;
    console.log(id);
    const response = yield call(() => axiosGet(url).then((res) => res.data));
    yield put(getShopByIdResponse(response));
  } catch (error) {
    yield put(getShopByIdResponse(error));
  }
}

export function* onPostShop({ payload }) {
  try {
    const url = `shop`;
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const response = yield call(() =>
      axiosPost(url, payload, config).then((res) => res.data)
    );
    yield put(postShopResponse(response));
  } catch (error) {
    yield put(postShopResponse(error));
  }
}

export function* onPostCart({ payload }) {
  try {
    const body = { products: payload };
    const url = `shop/checkout`;
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const response = yield call(() =>
      axiosPost(url, body).then((res) => res.data)
    );
    yield put(postCartResponse(response));
  } catch (error) {
    yield put(postCartResponse(error));
  }
}

export function* onPutShop({ payload, id }) {
  try {
    const url = `shop/${id}`;

    const response = yield call(() =>
      axiosPut(url, payload).then((res) => res.data)
    );
    yield put(putShopResponse(response));
  } catch (error) {
    yield put(putShopResponse(error));
  }
}

export function* onDeleteShop({ id }) {
  try {
    const url = `shop/${id}`;

    const response = yield call(() => axiosDelete(url).then((res) => res.data));
    yield put(deleteShopResponse(response));
  } catch (error) {
    yield put(deleteShopResponse(error));
  }
}

export function* ShopWatcherSaga() {
  yield takeLatest(ShopTypes.GET_SHOP_LIST_REQUEST, onGetShopList);
  yield takeLatest(ShopTypes.GET_SHOP_BY_ID_REQUEST, onGetByIdShop);
  yield takeLatest(ShopTypes.POST_SHOP_REQUEST, onPostShop);
  yield takeLatest(ShopTypes.POST_CARD_REQUEST, onPostCart);
  yield takeLatest(ShopTypes.PUT_SHOP_REQUEST, onPutShop);
  yield takeLatest(ShopTypes.DELETE_SHOP_REQUEST, onDeleteShop);
}
