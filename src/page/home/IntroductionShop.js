import React from "react";
import { Row, Col } from "antd";
import {Link} from "react-router-dom";
import "./css/style.css";

function IntroductionShop(props) {
  return (
    <>
    <Row className="container_introducton">
      <Col span={12} className="introduction_detail">
        <h1>Design Your Comfort Zone</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <Link className="button" to="products"> shop now </Link>
        
      </Col>
      <Col span={12} className="introducton_img">
        <img src="/images/hero-2.jpeg" alt="" className="introducton_img1" />
        <img src="/images/hero-1.jpeg" alt="" className="introducton_img2" />
        <div className="introducton_img3"></div>
      </Col>
    </Row>
    </>
  );
}

export default React.memo(IntroductionShop);
