import React, { Component, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { Link } from "react-router-dom";
import { useState } from "react";

function CartScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };
  const chickoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  return (
    <div className="cart-screen">
      <div className="cart-items-list">
        {cartItems.map((item, index) => (
          <div className="cart-item-list">
            <div className="item-img">
              <Link to={"/products/" + item.product}>
                {" "}
                <img src={item.image} alt="item" />
              </Link>
            </div>
            <div className="item-details">
              <h2 className="item-name">
                <Link to={"/products/" + item.product}>{item.name}</Link>
              </h2>
              <span className="item status">
                {item.countInStock > 0 ? "Disponible" : "finished"}
              </span>
              <div className="item-control">
                <div className="qty">
                  <label htmlFor="qty"> qty :</label>
                  <select
                    id="qty"
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(addToCart(item.product, e.target.value))
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option value={x + 1} key={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                  <div className="button">
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-price">
              <span>Price</span>
              <h1 className="item-price">{item.price}$</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-action-box">
        <h1>Total items : {cartItems.reduce((a, c) => a + c.qty, 0)} item </h1>
        <h1>
          Total price: {cartItems.reduce((a, c) => a + c.price * c.qty, 0)} $
        </h1>
        <button
          onClick={chickoutHandler}
          className="button primary full-width"
          disabled={cartItems.length === 0}
        >
          proceed to checkout
        </button>
      </div>
    </div>
  );
}
export default CartScreen;
