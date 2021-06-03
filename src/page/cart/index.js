import React, { useState } from "react";
import "./css/style.css";
import LayoutPage from "../../components/Layout";
import Directional from "../../components/Directional";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";

function CartPage(props) {
  const [showCart, setShowCart] = useState(true);
  return (
    <>
      <LayoutPage>
        {showCart ? (
          <Row
            style={{
              textAlign: "center",
              padding: "100px 0px 390px 0px",
              backgroundColor: "#fff",
            }}
          >
            <Col span={24}>
              <h1 style={{ fontWeight: "bold", fontSize: 40 }}>
                Your cart is empty
              </h1>
            </Col>
            <Col span={24}>
              <Link to="/product">
                <button
                  style={{
                    textTransform: "uppercase",
                    fontSize: 16,
                    color: "#fff",
                    backgroundColor: "#ab7a5f",
                    border: "none",
                    width: "auto",
                    height: "auto",
                    padding: "5px 15px",
                    borderRadius: "5px",
                  }}
                >
                  fill it
                </button>
              </Link>
            </Col>
          </Row>
        ) : (
          <h1>
            <Directional />
            <div className="container_cart">
              <Row className="cart_title">
                <Col span={6}>Item</Col>
                <Col span={6}>Price</Col>
                <Col span={6}>Quantity</Col>
                <Col span={6}>SubTotal</Col>
              </Row>
              <Row>
                <Col span={24}>
                  <hr />
                </Col>
              </Row>

              <Row style={{ padding: "40px 0px", fontSize: 17 }}>
                <Col span={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "20px",
                    }}
                  >
                    <img
                      src="https://dl.airtable.com/.attachments/e2eef862d9b7a2fb0aa74fa24fbf97bb/25c4bc17/0-pexels-pixabay-462235.jpg"
                      className="cart_img"
                    />
                    <div style={{ marginLeft: 20 }}>
                      <div>Modern Poster</div>
                      <div>Color: red</div>
                    </div>
                  </div>
                </Col>
                <Col span={6} className="cart_price">
                  $ 30.99
                </Col>
                <Col span={6}>
                  <div className="cart_count">
                    <button>-</button>
                    <button>1</button>
                    <button>+</button>
                  </div>
                </Col>
                <Col span={4}>$ 30.99</Col>
                <Col span={2}>
                  <DeleteOutlined
                    style={{
                      fontSize: 20,
                      backgroundColor: "red",
                      color: "white",
                      padding: 2,
                      borderRadius: "2px",
                      cursor: "pointer",
                    }}
                  />
                </Col>
              </Row>

              <Row style={{ padding: "40px 0px", fontSize: 17 }}>
                <Col span={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "20px",
                    }}
                  >
                    <img
                      src="https://dl.airtable.com/.attachments/e2eef862d9b7a2fb0aa74fa24fbf97bb/25c4bc17/0-pexels-pixabay-462235.jpg"
                      className="cart_img"
                    />
                    <div style={{ marginLeft: 20 }}>
                      <div>Modern Poster</div>
                      <div>Color: red</div>
                    </div>
                  </div>
                </Col>
                <Col span={6} className="cart_price">
                  $ 30.99
                </Col>
                <Col span={6}>
                  <div className="cart_count">
                    <button>-</button>
                    <button>1</button>
                    <button>+</button>
                  </div>
                </Col>
                <Col span={4}>$ 30.99</Col>
                <Col span={2}>
                  <DeleteOutlined
                    style={{
                      fontSize: 20,
                      backgroundColor: "red",
                      color: "white",
                      padding: 2,
                      borderRadius: "2px",
                      cursor: "pointer",
                    }}
                  />
                </Col>
              </Row>

              <Row>
                <Col span={24}>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col
                  span={24}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 30,
                  }}
                >
                  <Link to="/products" className="cart_button">
                    Continue Shopping
                  </Link>
                  <botton className="cart_button_delete">
                    Clear Shopping Cart
                  </botton>
                </Col>
              </Row>
              <Row className="cart_details">
                <Col span={6} className="cart_detail">
                  <div className="cart_detail_price">
                    <h3>Subtotal </h3>
                    <h3>$190.98</h3>
                  </div>
                  <div className="cart_detail_price">
                    <p>Shipping Fee :</p>
                    <div>$5.34</div>
                  </div>
                  <hr />
                  <di className="cart_detail_price">
                    <h1>Order Total :</h1>
                    <h1>$196.32</h1>
                  </di>
                </Col>
              </Row>
              <Row className="cart_detail_login">
                <Col span={6}>
                  <button className="cart_login">login</button>
                </Col>
              </Row>
            </div>
          </h1>
        )}
      </LayoutPage>
    </>
  );
}

export default React.memo(CartPage);
