import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined, UserAddOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import "./css/style.css";

function HeaderPage(props) {
  return (
    <>
      <Row className="container_header">
        <Col>
          <img
            src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg"
            alt="logo"
            style={{ width: "80%", cursor: "pointer", paddingTop: "10px" }}
          />
        </Col>

        <Col span={8} className="header_menu">
          <ul >
            <li><Link to="/" style={{color: "#000"}}>Home</Link></li>
            <li><Link to="/about" style={{color: "#000"}}>About</Link></li>
            <li><Link to="/products" style={{color: "#000"}}>Products</Link></li>
            
            
            
          </ul>
        </Col>
        <Col style={{ display: "flex", fontSize: 24, marginTop: 20, cursor: "pointer" }}>
          <div
            style={{
              marginRight: "25px",
              position: "relative",
              
              marginLeft: '5px'
            }}
          >
            <Link to="cart" style={{color: "#000"}}>Cart</Link>
            <ShoppingCartOutlined />
            <div className="header_cart">0</div>
          </div>

          <div style={{ cursor: "pointer", marginLeft: '5px' }}>
            <Link to="login" style={{color: "#000"}}>Login</Link>
            <UserAddOutlined  />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default React.memo(HeaderPage);
