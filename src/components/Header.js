import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined, UserAddOutlined } from "@ant-design/icons";
import { Row, Col, message } from "antd";
import "./css/style.css";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import * as reselect from "../page/cart/reselect/reselect-cart";

function HeaderPage(props) {
  const { totalItems } = useSelector(
    createStructuredSelector({
      totalItems: reselect.getCountItems,
    })
  );
  const token = window.localStorage.token;

  const handleLogOut = () => {
    window.localStorage.clear();
    message.success("Đăng xuất thành công!", 2);
  };
  return (
    <>
      <Row className="container_header">
        <Col>
          <Link to="/">
            <img
              src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg"
              alt="logo"
              className="header_img"
            />
          </Link>
        </Col>

        <Col span={8} className="header_menu">
          <ul>
            <li>
              <Link to="/" style={{ color: "#000" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" style={{ color: "#000" }}>
                About
              </Link>
            </li>
            <li>
              <Link to="/products" style={{ color: "#000" }}>
                Products
              </Link>
            </li>
            {token ? (
              <li>
                <Link to="/check" style={{ color: "#000" }}>
                  Check out
                </Link>
              </li>
            ) : null}
          </ul>
        </Col>
        <Col className="deader_cart_login">
          <div className="header_carts">
            <Link to="/cart" style={{ color: "#000" }}>
              Cart
            </Link>
            <ShoppingCartOutlined />
            <div className="header_cart">{totalItems}</div>
          </div>
          {token ? null : (
            <div style={{ cursor: "pointer", marginLeft: "5px" }}>
              <Link to="/login" style={{ color: "#000" }}>
                Login
              </Link>
              <UserAddOutlined />
            </div>
          )}

          {token ? (
            <Link to="/login" onClick={handleLogOut}>
              Log out
            </Link>
          ) : null}
        </Col>
      </Row>
    </>
  );
}

export default React.memo(HeaderPage);
