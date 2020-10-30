import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Rigester } from "../actions/userAction.js";
import { Table, Button, Form, Row, Col, Container } from "react-bootstrap";
import { Alert } from "reactstrap";
import ChickOutSteps from "../components/ChickOutSteps";

function RigesterScreen(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const userRigester = useSelector((state) => state.userRigester);
  const { loading, data, error } = userRigester;
  const dispatch = useDispatch();
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  useEffect(() => {
    if (data) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [data]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(Rigester(email, password, name));
  };

  return (
    <Container className="sign-screen">
      <ChickOutSteps step1></ChickOutSteps>

      <Form onSubmit={submitHandler} className="form-screen">
        {loading && <Alert color="info">Loading....</Alert>}
        {error && <Alert color="warning">Invaled Email or Password</Alert>}
        <Form.Group as={Row} controlId="formHorizontalName">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalName">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              placeholder="Your Name"
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalName">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalName">
          <Form.Label column sm={2}>
            RePassword
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              name="password"
              id="repassword"
              onChange={(e) => setRepassword(e.target.value)}
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
              Rigester
            </Button>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Link
              to={redirect === "/" ? "signin" : "signin?redirect=" + redirect}
              className="button full-width"
            >
              Create New acconut
            </Link>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
}
export default RigesterScreen;
