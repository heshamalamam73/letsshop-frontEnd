import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions.js";
import { Spinner, Alert } from "reactstrap";

import {
  Col,
  Row,
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";
import LeftNav from "../components/LeftNav.js";
import UpNav from "../components/UpNav";

function HomeScreen(props) {
  const productsList = useSelector((state) => state.productsList);

  const { products, loading, error } = productsList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());

    return () => {
      //
    };
  }, []);
  return loading ? (
    <div className="center">
      <Spinner style={{ width: "3rem", height: "3rem" }} />
    </div>
  ) : error ? (
    <div>Error...</div>
  ) : (
    <div className="home-page">
      <UpNav />

      <div className="home-right">
        <div className="nav-left">
          <LeftNav />
        </div>
        <div className="products-list">
          <ul className="grid">
            {products.map((product) => (
              <li to={"/products/" + product._id}>
                <Card>
                  <Link to={"/products/" + product._id}>
                    <CardImg top width="100%" src={product.image} />
                  </Link>
                  <CardBody>
                    {product.countInStock < 10 &&
                      (product.countInStock != 0 ? (
                        <Alert color="warning">
                          remain {product.countInStock}
                        </Alert>
                      ) : (
                        <Alert color="danger">finished</Alert>
                      ))}

                    <CardTitle>{product.name}</CardTitle>
                    <CardText>{product.price} </CardText>
                    <CardText>
                      <small className="text-muted">
                        <a href={"/products/" + product._id}>More</a>
                      </small>
                    </CardText>
                  </CardBody>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default HomeScreen;
