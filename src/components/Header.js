import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartOutlined, UserAddOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import "./css/style.css";
import {useSelector} from "react-redux";
import {createStructuredSelector} from "reselect";
import * as reselect from '../page/cart/reselect/reselect-cart';

function HeaderPage(props) {

  const {totalItems} = useSelector(createStructuredSelector({
    totalItems: reselect.getCountItems
  }))
  return (
    <>
      <Row className="container_header">
        <Col>
          <NavLink to="/">
            <img
              src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg"
              alt="logo"
              className="header_img"
            />
          </NavLink>
        </Col>

        <Col span={8} className="header_menu">
          <ul>
            <li>
              <NavLink to="/" style={{ color: "#000" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" style={{ color: "#000" }}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" style={{ color: "#000" }}>
                Products
              </NavLink>
            </li>
            
            <li>
              <NavLink to="/check" style={{ color: "#000" }}>
                Check out
              </NavLink>
            </li>
          </ul>
        </Col>
        <Col className="deader_cart_login">
          <div className="header_carts">
            <NavLink to="/cart" style={{ color: "#000" }}>
              Cart
            </NavLink>
            <ShoppingCartOutlined />
            <div className="header_cart">{totalItems}</div>
          </div>

          <div style={{ cursor: "pointer", marginLeft: "5px" }}>
            <NavLink to="/login" style={{ color: "#000" }}>
              Login
            </NavLink>
            <UserAddOutlined />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default React.memo(HeaderPage);
