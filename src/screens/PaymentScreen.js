import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveShipping, savePaymentMethod } from "../actions/cartActions";
import ChickOutSteps from "../components/ChickOutSteps";
import { Table, Button, Form, Row, Col, Container } from "react-bootstrap";
import { Alert } from "reactstrap";
function PaymentScreen(props) {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push("/placeorder");
  };

  return (
    <Container className="payment-screen">
      <ChickOutSteps step1 step2 step3></ChickOutSteps>

      <Form onSubmit={submitHandler} className="form-screen">
        <Form.Group as={Row} controlId="formHorizontalName">
          <Form.Label column sm={2}>
            PayPal
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="radio"
              name="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button
              style={{ margin: "10px" }}
              type="submit"
              onClick={submitHandler}
            >
              Continue
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
}
export default PaymentScreen;
