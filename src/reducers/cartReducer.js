import {
  ADD_TO_CART,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING,
  ENTER_PAYMENT_METHOD,
} from "../constants/cartActiontype.js";

function cartReducer(
  state = { cartItems: [], shipping: {}, payment: {} },
  action
) {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const product = state.cartItems.find((x) => x.product === item.product);
      if (product) {
        return {
          cartItems: state.cartItems.map((x) =>
            x.product === product.product ? item : x
          ),
        };
      }
      return { cartItems: [...state.cartItems, item] };
    case CART_REMOVE_ITEM:
      return {
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_SAVE_SHIPPING:
      return {
        ...state,
        shipping: action.payload,
      };
    case ENTER_PAYMENT_METHOD:
      return {
        ...state,
        payment: action.payload,
      };
    default:
      return state;
  }
}
export { cartReducer };
