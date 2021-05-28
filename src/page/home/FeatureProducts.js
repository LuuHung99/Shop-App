import React from "react";
import { Row, Col } from "antd";
import {Link} from "react-router-dom";
import "./css/style.css";
function FeatureProducts(props) {
  return (
    <Row className="container_products">
      <Col span={24} className="feature_products">
        <h1>Featured Products</h1>
        <hr />
      </Col>
      <Row className="feature_products_detail">
        <Col span={8}>
          <img
            src="/images/pd_home1.jpg"
            alt=""
            className="feature_products_image"
          />
          <div className="feature_products_info">
            <p>Entertainment Center</p>
            <div className="feature_products_price">$599.99</div>
          </div>
        </Col>
        <Col span={8}>
          <img
            src="/images/pd_home2.jpg"
            alt=""
            className="feature_products_image"
          />
          <div className="feature_products_info">
            <p>Entertainment Center</p>
            <div className="feature_products_price">$599.99</div>
          </div>
        </Col>
        <Col span={8}>
          <img
            src="/images/pd_home3.jpg"
            alt=""
            className="feature_products_image"
          />
          <div className="feature_products_info">
            <p>Entertainment Center</p>
            <div className="feature_products_price">$599.99</div>
          </div>
        </Col>
      </Row>
      <Row style={{ margin: "0 auto" }}>
        <Col span={24}>
            <Link className="button">all products</Link>
         
        </Col>
      </Row>
    </Row>
  );
}

export default React.memo(FeatureProducts);
