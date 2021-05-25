import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ShoppingCartOutlined, UserAddOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";

function HeaderPage(props) {
  return (
    <Router>
      <Row
        style={{
          display: "flex",
          backgroundColor: "#fff",
          justifyContent: "space-between",
          padding: "0 80px"
        }}
      >
        <Col>
          <img
            src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg"
            alt="logo"
            style={{ width: "80%", cursor: "pointer"}}
          />
        </Col>

        <Col span={8}>
          <ul style={{letterSpacing: "2px", display: "flex", justifyContent: "space-around", fontSize: 18, marginTop: 20, }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
          </ul>
        </Col>
        <Col style={{ display: "flex" , fontSize: 18, marginTop: 20}}>
          <div style={{marginRight: "15px"}}>
            <Link to="cart">Cart</Link>
            <ShoppingCartOutlined style={{ color: "black" }} />
          </div>
          <div>
            <Link to="login">Login</Link>
            <UserAddOutlined style={{ color: "#000" }} />
          </div>
        </Col>
      </Row>
    </Router>
  );
}

export default React.memo(HeaderPage);
