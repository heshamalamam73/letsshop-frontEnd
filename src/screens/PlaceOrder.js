import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveShipping } from "../actions/cartActions";
import ChickOutSteps from "../components/ChickOutSteps";
import { Button } from "react-bootstrap";
import {
  Container,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Badge,
} from "reactstrap";

function PlaceOrder(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems, shipping, payment } = cart;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty, 0);
  const tax = 0.25 * itemsPrice;
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const totalPrice = itemsPrice + tax + shippingPrice;
  const dispatch = useDispatch();
  // if (!payment) {
  //   props.history.push("/payment");
  // }
  // if (!shipping) {
  //   props.history.push("/shipping");
  // }

  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push("/placeorder");
  };

  return (
    <div className="placeorder-screen">
      <div className="placeorder-details">
        {cartItems.map((item, index) => (
          <ul className="list-items">
            <li className="cart-item-list">
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
                    <label htmlFor="qty"> qty : {item.qty}</label>
                  </div>
                </div>
              </div>
              <div className="item-price">
                <span>Price</span>
                <p className="item-price">{item.price}$</p>
              </div>
            </li>
          </ul>
        ))}
      </div>
      <div className="placeorder-action">
        <div className="action-box">
          <p>Total ({cartItems.reduce((a, c) => a + c.qty, 0)} Articles) :</p>
          <p>Price : {cartItems.reduce((a, c) => a + c.price * c.qty, 0)} $</p>
          <p>Tax = {tax}</p>
          <p>Shipping = {shippingPrice}</p>
          <p>Total : {totalPrice}</p>
        </div>
        <button>pay now with {payment}</button>

        <div className="shipping-info">
          <p className="title">Shipping Information</p>

          {shipping && (
            <div>
              <p>shipping address : {shipping.country}</p>
              <p>shipping city : {shipping.city}</p>
              <p>shipping postal code : {shipping.postalCode}</p>
              <p>shipping country : {shipping.country}</p>
            </div>
          )}
          <button
            onClick={() => {
              props.history.push("/shipping");
            }}
          >
            Change Address
          </button>
        </div>
      </div>
    </div>
  );
}
export default PlaceOrder;
