import { Switch } from "react-router-dom";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_POST_FAIL,
  PRODUCT_POST_SUCCESS,
  PRODUCT_POST_REQUEST,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
} from "../constants/productActionType.js";

function productsListReducer(state = { products: [] }, action) {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
function PostNewProductReducer(state = { product: {} }, action) {
  switch (action.type) {
    case PRODUCT_POST_REQUEST:
      return { loading: true, success: false };
    case PRODUCT_POST_SUCCESS:
      return { loading: false, product: action.payload, success: true };
    case PRODUCT_POST_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
}
function productDetailsReducer(state = { product: {} }, action) {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
function deleteProductReducer(state = { product: {} }, action) {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, deleteSuccess: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
export {
  productsListReducer,
  productDetailsReducer,
  PostNewProductReducer,
  deleteProductReducer,
};
