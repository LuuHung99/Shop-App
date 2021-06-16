import React from "react";
import { Col, Row } from "antd";
import "./css/style.css";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function ProductShopApp(props) {
  const { show, data, searchProcuct } = props;
  // const [dataSearch, setDataSearch] = useState([]);

  // useEffect(() => {
  //   if (data.length > 0) {
  //     setDataSearch(data);
  //   }
  // }, [data]);

  return (
    <Row className="containers_products">
      {data.length > 0 ? (
        data
          // eslint-disable-next-line array-callback-return
          .filter((val) => {
            if (searchProcuct === "") {
              return val;
            } else if (val.name.toLowerCase().includes(searchProcuct)) {
              return val;
            }
            
          })
          .map((item, index) => {
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
                  <div
                    className={show ? "" : "feature_products_image_hover_show"}
                  >
                    {!show ? (
                      <Link to={`products/${item.id}`}>
                        <SearchOutlined className="feature_products_icon_show" />
                      </Link>
                    ) : null}
                  </div>
                </div>

                <div className="product_info">
                  {show ? (
                    <h1 style={{ textTransform: "capitalize" }}>{item.name}</h1>
                  ) : (
                    <p style={{ textTransform: "capitalize" }}>{item.name}</p>
                  )}
                  <span style={{ color: "#b99179" }}>
                  $ {(item.price.toFixed(2) / 100 ).toLocaleString()}
                  </span>
                  <p style={show ? {} : { display: "none" }}>
                    {item.description.slice(0, 160)}...
                  </p>
                  
                  <button style={show ? {} : { display: "none" }}>
                    <Link to={`products/${item.id}`} style={{color: '#fff'}}>details</Link>
                  </button>
                </div>
              </Col>
            );
          })
      ) : (
        <h2 style={{ fontWeight: "bold" }}>
          Sorry, no products matched your search.
        </h2>
      )}
    </Row>
  );
}

export default React.memo(ProductShopApp);
