<Container className="placeOlder">
  <ChickOutSteps step1 step2 step3 step4></ChickOutSteps>
  <Row>
    <Col xl="9" className="info">
      <ListGroup>
        <ListGroupItem className="justify-content-between">
          {cartItems.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            cartItems.map((item, index) => (
              <div className="cart-details">
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
                  <h4 className="item status">{item.status}</h4>
                  <div>qty :{qty}</div>
                </div>
                <div className="item-price">
                  <span>Price</span>
                  <h1 className="item-price">{item.price}$</h1>
                </div>
              </div>
            ))
          )}
        </ListGroupItem>
        <ListGroupItem className="justify-content-between shipping">
          <h1>Shipping Information</h1>
          {shipping && (
            <div>
              <h5>shipping address : {shipping.country}</h5>
              <h5>shipping city : {shipping.city}</h5>
              <h5>shipping postal code : {shipping.postalCode}</h5>
              <h5>shipping country : {shipping.country}</h5>
            </div>
          )}
        </ListGroupItem>
      </ListGroup>
    </Col>

    <Col xl="3" className="action">
      <h1>Total ({cartItems.reduce((a, c) => a + c.qty, 0)} Articles) :</h1>
      <h1>Price : {cartItems.reduce((a, c) => a + c.price * c.qty, 0)} $</h1>

      <h1>Tax = {tax}</h1>
      <h1>Shipping = {shippingPrice}</h1>
      <h1>Total : {totalPrice}</h1>

      <Button variant="success" block>
        pay now with {payment}
      </Button>
    </Col>
  </Row>
  {/* <div>
        {shipping && (
          <div>
            {shipping.country}
            {shipping.city}
            {shipping.postalCode}
            {shipping.address}
          </div>
        )}

        <div>
          <div className="cart">
            {cartItems.length === 0 ? (
              <div>Cart is empty</div>
            ) : (
              cartItems.map((item, index) => (
                <div className="cart-details">
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
                    <h4 className="item status">{item.status}</h4>
                    <div>qty :{qty}</div>
                  </div>
                  <div className="item-price">
                    <span>Price</span>
                    <h1 className="item-price">{item.price}$</h1>
                  </div>
                </div>
              ))
            )}
            <div className="cart-action">
              <h1>
                Total ({cartItems.reduce((a, c) => a + c.qty, 0)} Articles) :
              </h1>
              <h1>
                Price : {cartItems.reduce((a, c) => a + c.price * c.qty, 0)} $
              </h1>

              <h1>Tax = {tax}</h1>
              <h1>Shipping = {shippingPrice}</h1>
              <h1>Total : {totalPrice}</h1>

              <h2>{payment}</h2>
              <Button variant="success">pay now</Button>
            </div>
          </div>
        </div>
      </div> */}
</Container>;

<li className="list-item">
  {cartItems.length === 0 ? (
    <div>Cart is empty</div>
  ) : (
    cartItems.map((item, index) => (
      <div className="cart-details">
        <div className="item-img">
          {/* <Link to={"/products/" + item.product}>
                      {" "}
                      <img src={item.image} alt="item" />
                    </Link> */}
          img here
        </div>
        <div className="item-details">
          <h2 className="item-name">
            <Link to={"/products/" + item.product}>{item.name}</Link>
          </h2>
          <h4 className="item status">{item.status}</h4>
          <div>qty :{qty}</div>
        </div>
        <div className="item-price">
          <span>Price</span>
          <h1 className="item-price">{item.price}$</h1>
        </div>
      </div>
    ))
  )}
</li>;
