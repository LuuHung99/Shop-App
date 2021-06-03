import { Col, Row } from "antd";
import React from "react";
import "./css/style.css";

function CustomFurniture(props) {
  return (
    <>
    <Row className="container_custom">
      <Row style={{ display: "flex", justifyContent: "space-between" }} className="custom_furniture">
        <Col span={12}>
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              maxWidth: "300px",
              lineHeight: 1,
            }}
          >
            Custom Furniture Built Only For You
          </h1>
        </Col>
        <Col span={12}>
          <p style={{ fontSize: "16px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </Col>
      </Row>
      <Row className="container_custom_history">
        <Col span={7} className="container_custom_detail">
          <img src="/images/kimchinam.png" alt="" />
          <h1 style={{ marginTop: "10px", fontSize: "26px" }}>Mission</h1>
          <p style={{ color: "#5f4435", fontSize: 16 }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
            autem unde numquam nisi
          </p>
        </Col>
        <Col span={7} className="container_custom_detail">
          <img src="/images/sumenh.png" alt="" />
          <h1 style={{ marginTop: "10px", fontSize: "26px" }}>Vision</h1>
          <p style={{ color: "#5f4435", fontSize: 16 }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
            autem unde numquam nisi
          </p>
        </Col>
        <Col span={7} className="container_custom_detail">
          <img src="/images/tamnhin.png" alt="" />
          <h1 style={{ marginTop: "10px", fontSize: "26px" }}>History</h1>
          <p style={{ color: "#5f4435", fontSize: 16 }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
            autem unde numquam nisi
          </p>
        </Col>
      </Row>
    </Row>
    </>
  );
}

export default CustomFurniture;
