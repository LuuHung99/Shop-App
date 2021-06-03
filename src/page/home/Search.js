import { Row, Col } from "antd";
import React from "react";

function SearchHome(props) {
  return (
    <>
    <Row className="container_search">
      <Col span={12} className="search_info">
        <h1>Join our newsletter and get 20% off</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore?
        </p>
      </Col>
      <Col span={12} className="search_suscrible">
        <input type="text" placeholder="Enter email" />
        <button>Subscribe</button>
      </Col>
    </Row>
    </>
  );
}

export default React.memo(SearchHome);
