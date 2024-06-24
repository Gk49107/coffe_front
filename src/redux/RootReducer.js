import { combineReducers } from "@reduxjs/toolkit";

import ShopReducer from "./Shop/ShopReducer";
import ProductReducer from "./Products/ProductReducer";

const rootReducer = combineReducers({
  Shops: ShopReducer,
  Product: ProductReducer,
});

export default rootReducer;
