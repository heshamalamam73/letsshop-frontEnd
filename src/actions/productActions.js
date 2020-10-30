import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_POST_REQUEST,
  PRODUCT_POST_SUCCESS,
  PRODUCT_POST_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
} from "../constants/productActionType.js";
import axios from "axios";

const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("/api/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};
const detailsProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    const { data } = await axios.get("/api/products/" + productId);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};
const postNewProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_POST_REQUEST, payload: product });
    const {
      userSignin: { userInfo },
    } = getState();
    if (product._id) {
      const { data } = await axios.put(
        "/api/products/" + product._id,
        product,
        {
          headers: { authorization: "bearer " + userInfo.token },
        }
      );
      dispatch({ type: PRODUCT_POST_SUCCESS, payload: product });
    } else {
      const { data } = await axios.post("/api/products", product, {
        headers: { authorization: "bearer " + userInfo.token },
      });
      dispatch({ type: PRODUCT_POST_SUCCESS, payload: product });
    }
  } catch (error) {
    dispatch({ type: PRODUCT_POST_FAIL, payload: error.message });
  }
};
const deleteUnProduct = (productId) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
    const {
      userSignin: { userInfo },
    } = getState();

    const { data } = await axios.delete("/api/products/" + productId, {
      headers: { authorization: "bearer " + userInfo.token },
    });
    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
      payload: data,
      deleteSuccess: true,
    });
  } catch (error) {
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
  }
};
export { listProducts, detailsProduct, postNewProduct, deleteUnProduct };
