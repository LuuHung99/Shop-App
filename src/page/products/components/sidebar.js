import React, { useState, useEffect } from "react";
import { Input, Slider, InputNumber, Row, Col, Layout, Select } from "antd";
import "./css/style.css";
import { useSelector } from "react-redux";
import ProductShopApp from "../product/product";
import { GroupOutlined, UnorderedListOutlined } from "@ant-design/icons";

const { Option } = Select;

function SidebarProduct(props) {
  const [searchProcuct, setSearchProduct] = useState("");
  const [inputValue, setInputValue] = useState(100);
  const dataShop = useSelector((state) => state.currentShop.products);
  const [category, setCategory] = useState("all");
  const [company, setCompany] = useState("all");
  const [color, setColor] = useState("#BF00FF");
  const [data, setData] = useState([]);
  const [showProduct, setShowProduct] = useState(false);
  const [shipping, setShipping] = useState();
  const [longData, setLongData] = useState();
  const [sortBy, setSortBy] = useState("");
  const [clearFilter, setClearFilter] = useState();

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
    { id: 4, company: "ikea" },
    { id: 5, company: "caressa" },
  ];

  let colorss = [
    {
      id: 0,
      color: "#BF00FF",
    },
    {
      id: 1,
      color: "#ff0000",
    },
    {
      id: 2,
      color: "#00ff00",
    },
    {
      id: 3,
      color: "#0000ff",
    },
    {
      id: 4,
      color: "#000",
    },
    {
      id: 5,
      color: "#ffb900",
    },
  ];  

  let sortByProduct = [
    {
      id: 0,
      sorts: "Price (Lowest)",
    },
    {
      id: 1,
      sorts: "Price (Highest)",
    },
    {
      id: 2,
      sorts: "Name (A-Z)",
    },

    {
      id: 3,
      sorts: "Name (Z-A)",
    },
  ];

  // useEffect(() => {
  //   if (dataShop.length > 0) {
  //     const newPrice = dataShop.map((item) => item.price);
  //     const newName = dataShop.map((item) => item.name);

  //     const newSortPriceIncre = newPrice.sort((a, b) => {
  //       return a - b;
  //     });

  //     const newSortPriceDecre = newPrice.sort((a, b) => {
  //       return b - a;
  //     });

  //     const newSortNameIncre = newName.sort((a, b) => a.localeCompare(b));

  //     const newSortNameDecre = newName.sort((a, b) => b.localeCompare(a));

  //     setSortPriceDecre(newSortPriceDecre);
  //     setSortPriceIncre(newSortPriceIncre);
  //     setSortNameDecre(newSortNameIncre);
  //     setSortNameIncre(newSortNameDecre);
  //   }
  // }, [dataShop]);
 

  useEffect(() => {
    const getData = setTimeout(() => {
      let result =
        dataShop.length > 0
          ? dataShop.filter(
              (x) =>
                (category !== "all" ? x.category === category : x) &&
                (company !== "all" ? x.company === company : x) &&
                (inputValue > 0 ? x.price <= inputValue * 3100 : null) &&
                (color !== "#BF00FF"
                  ? x.colors.map((item) => item) == color
                  : x) &&
                (shipping === true ? x.shipping === shipping : x)

              //   (sortBy == "Price (Highest)"
              //     ? sortPrice.sort((a, b) => {
              //         return a - b;
              //       }) == sortBy
              //     : x)
              // (sortBy == "Name (A-Z)"
              //   ? sortName.sort((a, b) => a.localeCompare(b)) !== sortBy
              //   : x) &&
              // (sortBy == "Name (Z-A)"
              //   ? sortName.sort((a, b) => b.localeCompare(a)) !== sortBy
              //   : x)

              //  &&
              // (shipping !== "All" ? x.shipping == true : x)
            )
          : dataShop;
      setData(result);
      setLongData(result);
      
    }, 200);
    return () => clearTimeout(getData);
  }, [
    category,
    color,
    company,
    data,
    dataShop,
    inputValue,
    shipping,
    sortBy,
    clearFilter
  ]);

  const onHandleChange = (val) => {
    setInputValue(val);
  };

  const handleProductRow = () => {
    setShowProduct(false);
  };

  const handleProductColumn = () => {
    setShowProduct(true);
  };

  return (
    <Layout style={{ backgroundColor: "#fff" }}>
      <div>
        <Row>
          <Col span={24}>
            <div className="head_container">
              <GroupOutlined
                onClick={handleProductRow}
                className="head_icon1"
              />
              <UnorderedListOutlined
                onClick={handleProductColumn}
                className="head_icon2"
              />
              <p>{longData && longData.length} Products Found</p>
              <hr />
              <span style={{ fontSize: "16px" }}>Sort by</span>
              <select
                className="head_options"
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortByProduct.map((item, index) => (
                  <option key={index} value={item.sorts} >
                    {item.sorts}
                  </option>
                ))}
              </select>
              {/* <Select defaultValue="Price (Lowest)" style={{ width: 120 }} onChange={() =>handleChange(data)}>
                <Option value={sortPriceIncre} onClick={() => handleClickPriceLowest(data)}>
                  Price (Lowest)
                </Option>
                <Option value="Price (Highest)">Price (Highest)</Option>
                <Option value="Name (A-Z)">Name (A-Z)</Option>
                <Option value="Name (Z-A)">Name (Z-A)</Option>
              </Select> */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="site-layout-background">
              <Input
                placeholder="Search"
                className="sidebar_search"
                value={searchProcuct}
                onChange={(e) => setSearchProduct(e.target.value)}
              />
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
                {colorss.map((item, index) => {
                  return (
                    <div
                      className="sidebar_color_shop"
                      style={{ backgroundColor: item.color }}
                      key={index}
                      onClick={() => setColor(item.color)}
                    ></div>
                  );
                })}
              </div>
              <h3>Price</h3>
              <InputNumber
                style={{ margin: "0 16px", border: "none" }}
                value={inputValue}
                onChange={onHandleChange}
              />
              <Slider
                onChange={onHandleChange}
                value={typeof inputValue === "number" ? inputValue : 0}
                style={{ width: "70%", height: "10px" }}
              />
              <div style={{ display: "flex", marginTop: "30px" }}>
                <p>Free Shipping</p>
                <input
                  type="checkbox"
                  style={{ margin: "7px 10px" }}
                  onChange={(val) => setShipping(val)}
                />
              </div>
              <button
                className="sidebar_clear"
              >
                Clear Filters
              </button>
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <Col span={24}>
          <ProductShopApp
            show={showProduct}
            data={data}
            searchProcuct={searchProcuct}
          />
        </Col>
      </Row>
    </Layout>
  );
}

export default React.memo(SidebarProduct);
