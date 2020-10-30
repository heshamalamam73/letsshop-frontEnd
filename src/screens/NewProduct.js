import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postNewProduct, deleteUnProduct } from "../actions/productActions.js";
import { listProducts } from "../actions/productActions";
import { Table, Button, Form, Row, Col, Container } from "react-bootstrap";

function NewProduct(props) {
  const productsList = useSelector((state) => state.productsList);
  const { products, loading, error } = productsList;
  const [modelVisable, setModelVisable] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [discription, setDiscription] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [category, setCategorye] = useState("");
  const [numReviews, setNumReviews] = useState("");
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState("");
  const savedProduct = useSelector((state) => state.createProduct);
  const deleteproduct = useSelector((state) => state.deleteProduct);
  const { deleteSuccess, deleteFail, deleteLoading } = deleteproduct;
  const { success } = savedProduct;

  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      setModelVisable(false);
    }
    dispatch(listProducts());

    return () => {
      //
    };
  }, [success, deleteSuccess]);
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      postNewProduct({
        _id: id,
        name,
        price,
        discription,
        countInStock,
        image,
        brand,
        rating,
        category,
        numReviews,
      })
    );
  };
  const deleteHandler = (product) => {
    dispatch(deleteUnProduct(product._id));
  };

  const openModel = (product) => {
    setModelVisable(true);
    setId(product._id);
    setImage(product.image);
    setPrice(product.price);
    setName(product.name);
    setBrand(product.brand);
    setCategorye(product.category);
    setDiscription(product.discription);
    setCountInStock(product.countInStock);
  };

  return (
    <div className="form">
      <Container>
        <Button
          variant="primary"
          size="lg"
          onClick={() => {
            setModelVisable(!modelVisable);
          }}
        >
          {" "}
          Create Product
        </Button>
      </Container>
      {modelVisable && (
        <Container>
          <Form block onSubmit={submitHandler}>
            <Form.Group as={Row} controlId="formHorizontalName">
              <Form.Label column sm={2}>
                Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Product name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPrice">
              <Form.Label column sm={2}>
                Price
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="number"
                  placeholder="Product Price"
                  value={price}
                  name="price"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalImage">
              <Form.Label column sm={2}>
                Image
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Product Image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  name="image"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalDiscription">
              <Form.Label column sm={2}>
                Discription
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="discription"
                  onChange={(e) => setDiscription(e.target.value)}
                  value={discription}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalCountInStock">
              <Form.Label column sm={2}>
                CountInStock
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="number"
                  placeholder="countInStock"
                  name="countInStock"
                  onChange={(e) => setCountInStock(e.target.value)}
                  value={countInStock}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalCategory">
              <Form.Label column sm={2}>
                Category
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Category"
                  name="category"
                  onChange={(e) => setCategorye(e.target.value)}
                  value={category}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalBrand">
              <Form.Label column sm={2}>
                Brand
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="brand"
                  name="brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
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
                  {" "}
                  {id ? "Update" : "Create"}
                </Button>
                <Button
                  onClick={() => {
                    setModelVisable(false);
                  }}
                  type="submit"
                >
                  {" "}
                  {id ? "Cancel" : "Back"}
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Container>
      )}
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name </th>
              <th>Product CountInStock</th>
              <th>Product Price</th>
              <th>Product Category</th>
              <th>Product.brand</th>
              <th>Product action</th>
            </tr>
          </thead>
          {products &&
            products.map((product, id) => (
              <tbody>
                <tr>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td className={product.countInStock <= 10 ? "avviso" : ""}>
                    {product.countInStock}
                  </td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <Button
                      onClick={() => openModel(product)}
                      style={{ marginRight: "5px" }}
                    >
                      {" "}
                      Edit
                    </Button>
                    <Button
                      onClick={() => deleteHandler(product)}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
        </Table>
      </Container>
    </div>
  );
}
export default NewProduct;
