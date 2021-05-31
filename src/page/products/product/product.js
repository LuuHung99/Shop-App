import React from "react";
import { Col, Row } from "antd";
import "./css/style.css";
import {SearchOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

function ProductShopApp(props) {
  const { show, data } = props;
  console.log(show, data);

  //   let state1;

  //   if (dataShop.length > 0) state1 = dataShop.filter((x) => x.category === "");

  //   console.log(state1);

  // const handleProductRow = () => {
  //   setShowProduct(true);
  // };

  // const handleProductColumn = () => {
  //   setShowProduct(false);
  // };

  return (
    <Row className="containers_products">
      {data.length > 0
        ? data.map((item, index) => {
            return (
              <Col
                span={show ? 24 : 8}
                className={show ? "product_column" : "product_row"}
                key={index}
              >
                <div className="product_show_img">
                  <img
                    src={item.image}
                    alt=""
                    className={show ? "product_column_img" : "product_img"}
                  />
                  <div className="feature_products_image_hover_show">
                    <Link to="/">
                      <SearchOutlined className="feature_products_icon_show" />
                    </Link>
                  </div>
                </div>

                <div className="product_info">
                  {show ? (
                    <h1 style={{ textTransform: "capitalize" }}>{item.name}</h1>
                  ) : (
                    <p style={{ textTransform: "capitalize" }}>{item.name}</p>
                  )}
                  <span>$ {item.price.toFixed(2) / 100}</span>
                  <p style={show ? {} : { display: "none" }}>
                    {item.description.slice(0, 160)}...
                  </p>
                  <button style={show ? {} : { display: "none" }}>
                    details
                  </button>
                </div>
              </Col>
            );
          })
        : null}
    </Row>
  );
}

export default React.memo(ProductShopApp);
