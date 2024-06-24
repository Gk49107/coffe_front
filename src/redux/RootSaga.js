import { all } from "redux-saga/effects";

import { ShopWatcherSaga } from "./Shop/ShopSaga";
import { ProductWatcherSaga } from "./Products/ProductSaga";

export default function* RootSaga() {
  yield all([ShopWatcherSaga(), ProductWatcherSaga()]);
}
