import React, { useState, useEffect } from "react";
import { Input, Slider, InputNumber, Row, Col, Layout } from "antd";
import "./css/style.css";
import { useSelector } from "react-redux";
import ProductShopApp from '../product/product';
import { GroupOutlined, UnorderedListOutlined } from "@ant-design/icons";

function SidebarProduct(props) {
  const [inputValue, setInputValue] = useState(0);
  const dataShop = useSelector((state) => state.currentShop.products);
  const [category, setCategory] = useState("all");
  const [company, setCompany] = useState("all");
  const [data, setData] = useState();
  

  const [showProduct, setShowProduct] = useState(false);

  let cate = [
    { id: 0, category: "all" },
    { id: 1, category: "office" },
    { id: 2, category: "living room" },
    { id: 3, category: "kitchen" },
    { id: 4, category: "bedroom" },
    { id: 5, category: "dining" },
    { id: 6, category: "kids" },
  ];

  let com = [
    { id: 1, company: "all" },
    { id: 2, company: "marcos" },
    { id: 3, company: "liddy" },
    { id: 4, company: "chisd" },
    { id: 5, company: "alics" },
  ];

  
  setTimeout(() => {
    let result =
      dataShop.length > 0
        ? dataShop.filter(
            (x) =>
              (category != "all" ? x.category === category : x) &&
              (company != "all" ? x.company === company : x) 
              // &&
              // (inputValue > 0 ? x.price <= inputValue : x)
          )
        : dataShop;
    setData(result);
  }, 300);

  const onChange = (val) => {
    setInputValue(val);
  };

  const handleProductRow = () => {
    setShowProduct(false);
  }

  const handleProductColumn = () => {
    setShowProduct(true);
  }

  return (
    <Layout style={{ backgroundColor: "#fff" }}>
      <Row >
        <Col span={24} >
          <div className="head_container">
          <GroupOutlined onClick={handleProductRow} className="head_icon1" />
          <UnorderedListOutlined onClick={handleProductColumn} className="head_icon2" />
          <p>{dataShop.length} Products Found</p>
          <hr />
          <span style={{ fontSize: "16px" }}>Sort by</span>
          <select className="head_options">
            <option value="value">Price (Lowest)</option>
            <option value="value">Price (Highest)</option>
            <option value="value">Name (A - Z)</option>
            <option value="vaule">Name (Z - A)</option>
          </select>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="site-layout-background">
            <Input placeholder="Search" className="sidebar_search" />
            <h3>Category</h3>
            <div className="sidebar_category">
              {cate.map((item, index) => {
                return (
                  <button
                    style={{ textTransform: "capitalize" }}
                    onClick={() => setCategory(item.category)}
                    key={index}
                  >
                    {item.category}
                  </button>
                );
              })}
            </div>
            <h3>Company</h3>
            <select
              className="sidebar_company"
              onChange={(e) => setCompany(e.target.value)}
            >
              {com.map((item, index) => (
                <option value={item.company} key={index}>
                  {item.company}
                </option>
              ))}
            </select>
            <h3>Colors</h3>
            <div className="sidebar_color">
              <div>All</div>
              <div className="color1"></div>
              <div className="color2"></div>
              <div className="color3"></div>
              <div className="color4"></div>
              <div className="color5"></div>
            </div>
            <h3>Price</h3>

            <InputNumber
              style={{ margin: "0 16px" }}
              value={inputValue}
              onChange={onChange}
              style={{ border: "none" }}
            />
            <Slider
              onChange={onChange}
              value={typeof inputValue === "number" ? inputValue : 0}
              style={{ width: "70%", height: "10px" }}
            />

            <div style={{ display: "flex", marginTop: "30px" }}>
              <p>Free Shipping</p>
              <input type="checkbox" style={{ margin: "7px 10px" }}></input>
            </div>
            <button className="sidebar_clear">Clear Filters</button>
          </div>
        </Col>
      </Row>
      <Row>
      <Col span={24}>
        <ProductShopApp show={showProduct}  data={dataShop} />
      </Col>
      </Row>
    </Layout>
  );
}

export default React.memo(SidebarProduct);
