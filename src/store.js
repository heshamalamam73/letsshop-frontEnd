import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { cartReducer } from "./reducers/cartReducer.js";
import Cookie from "js-cookie";
import {
  productsListReducer,
  productDetailsReducer,
  PostNewProductReducer,
  deleteProductReducer,
} from "./reducers/productReducers.js";
import {
  userSigninReducer,
  userRigesterReducer,
} from "./reducers/userReducer.js";
import thunk from "redux-thunk";
const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userinfo") || null;
const shipping = Cookie.getJSON("shipping") || {};
const payment = Cookie.getJSON("payment") || "";

const initialState = {
  cart: { cartItems },
  userSignin: { userInfo },
  userRigester: {},
  shipping: {},
  payment: { payment },
};
const reducer = combineReducers({
  productsList: productsListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRigester: userRigesterReducer,
  createProduct: PostNewProductReducer,
  deleteProduct: deleteProductReducer,
});
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
