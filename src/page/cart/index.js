import React, { useState } from "react";
import "./css/style.css";
import LayoutPage from "../../components/Layout";
import Directional from "../../components/Directional";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import * as reselect from "./reselect/reselect-cart";
import { createStructuredSelector } from "reselect";

function CartPage(props) {
  const [shipping, setShipping] = useState("5.34");
  console.log(typeof(parseInt(shipping)));
  const { dataCart, totalMoney  } = useSelector(
    createStructuredSelector({
      dataCart: reselect.getDataCart,
      totalMoney: reselect.getTotalMoney,
 
    })
  );

  return (
    <React.Fragment>
      <LayoutPage>
        {!dataCart.length > 0 ? (
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
              <Link to="/products">
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
                    cursor: "pointer",
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
              {dataCart.length > 0
                ? dataCart.map((item, index) => (
                    <Row
                      style={{ padding: "40px 0px", fontSize: 17 }}
                      key={index}
                    >
                      <Col span={6}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            paddingLeft: "20px",
                          }}
                        >
                          <img
                            src={item.images[0].url}
                            className="cart_img"
                            alt=""
                          />
                          <div style={{ marginLeft: 20 }}>
                            <div style={{ textTransform: "capitalize" }}>
                              {item.name}
                            </div>
                            <div style={{ display: "flex" }}>
                              <div>Color: </div>
                              <div
                                style={{
                                  width: "15px",
                                  height: "15px",
                                  borderRadius: "15px",
                                  backgroundColor: item.colors[0],
                                  margin: "8px 10px",
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col span={6} className="cart_price">
                        $ {((item.price * item.qty).toFixed(2) / 100 ).toLocaleString()}
                      </Col>
                      <Col span={6}>
                        <div className="cart_count">
                          <button>-</button>
                          <button>{item.qty}</button>
                          <button>+</button>
                        </div>
                      </Col>
                      <Col span={4}> $ {((item.price * item.qty).toFixed(2) / 100 ).toLocaleString()}</Col>
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
                  ))
                : null}

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
                  <button className="cart_button_delete">
                    Clear Shopping Cart
                  </button>
                </Col>
              </Row>

              <Row className="cart_details">
                <Col span={8} className="cart_detail" >
                  <div className="cart_detail_price">
                    <h5>Subtotal </h5>
                    <h5>$ {(totalMoney.toFixed(2) / 100).toLocaleString()}</h5>
                  </div>
                  <div className="cart_detail_price">
                    <h6>Shipping Fee :</h6>
                    <h6>$ {shipping}</h6>
                  </div>
                  <hr />
                  <div className="cart_detail_price">
                    <h3>Order Total :</h3>
                    <h3>$ {totalMoney ? (totalMoney.toFixed(2) / 100).toLocaleString() - parseInt(shipping)   : null}</h3>
                  </div>
                </Col>
              </Row>

              <Row className="cart_detail_login">
                <Col span={8}>
                  <Link to="/login">
                    <button className="cart_login">login</button>
                  </Link>
                </Col>
              </Row>
            </div>
          </h1>
        )}
      </LayoutPage>
    </React.Fragment>
  );
}

export default React.memo(CartPage);
