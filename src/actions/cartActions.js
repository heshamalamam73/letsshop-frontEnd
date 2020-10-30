import {
  ADD_TO_CART,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING,
  ENTER_PAYMENT_METHOD,
} from "../constants/cartActiontype.js";
import axios from "axios";
import Cookie from "js-cookie";

const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/api/products/" + productId);
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });
    const {
      cart: { cartItems },
    } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
  } catch (error) {}
};
const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  const {
    cart: { cartItems },
  } = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
};
const saveShipping = (data) => (dispatch, getState) => {
  dispatch({ type: CART_SAVE_SHIPPING, payload: data });
  const { cart } = getState();
  Cookie.set("shipping", JSON.stringify(cart.shipping));
};
const savePaymentMethod = (data) => (dispatch, getState) => {
  dispatch({ type: ENTER_PAYMENT_METHOD, payload: data });
  const {
    cart: { cartItems },
  } = getState();
  Cookie.set("payment", JSON.stringify(cartItems.payment));
};
export { addToCart, removeFromCart, saveShipping, savePaymentMethod };
