import React, { useEffect, useState } from "react";
import "./css/style.css";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {SearchOutlined} from '@ant-design/icons';

function FeatureProducts(props) {
  const dispatch = useDispatch();
  const dataShop = useSelector((state) => state.currentShop.products);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch({ type: "GET_DATA_SHOP" });
  }, []);

  useEffect(() => {
    if (dataShop.length > 0) {
      const dataHome = dataShop.slice(9, 12);
      setData(dataHome);
    }
  }, [dataShop]);

  return (
    <Row className="container_products">
      <Col span={24} className="feature_products">
        <h1>Featured Products</h1>
        <hr />
      </Col>
      <Row className="feature_products_detail">
        {data.length > 0
          ? data.map((item, index) => (
              <Col span={8} key={index}>
                <div className="feature_products_show">
                  <img
                    style={{ height: 270, objectFit: "cover" }}
                    src={item.image}
                    alt=""
                    className="feature_products_image"
                  />
                  <div className="feature_products_image_hover"><Link to="products"><SearchOutlined className="feature_products_icon" /></Link></div>
                </div>
                <div className="feature_products_info">
                  <p style={{ textTransform: "capitalize" }}>{item.name}</p>
                  <div className="feature_products_price">
                    $ {item.price.toFixed(2) / 100}
                  </div>
                </div>
              </Col>
            ))
          : null}
      </Row>
      <Row style={{ margin: "0 auto", marginTop: "40px"}}>
        <Col span={24}>
          <Link className="button" to="products">
            all products
          </Link>
        </Col>
      </Row>
    </Row>
  );
}

export default React.memo(FeatureProducts);
