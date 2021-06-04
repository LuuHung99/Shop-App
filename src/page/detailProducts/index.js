import React, { useState, useEffect } from "react";
import "./css/style.css";
import LayoutPage from "../../components/Layout";
import { Row, Col, Button, Rate, message } from "antd";
import { Link, useParams } from "react-router-dom";
import { getDataShopById } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../page/cart/actions/index";
 
function DetailProducts(props) {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [image, setImage] = useState([]);
  const [count, setCount] = useState(1);
  const [imageFirst, setImageFirst] = useState();
  // console.log("imageFirst", imageFirst);
  const dispatch = useDispatch();
  const finished = useSelector((state) => state.cartReducer.finished);
  

  const addCart = (id) => {
    dispatch(actions.getDataCart(id));
    if (finished) {
      console.log("finished", finished);
      message.success("Add product to cart successfully", 2);
    }
  };
 
  useEffect(() => {
    if (data.images) {
      const dataShop = data.images.map((item) => item.url);
      setImageFirst(dataShop[0]);
      setImage(dataShop);
    }
  }, [data]);

  useEffect(() => {
    const getData = async () => {
      const data = await getDataShopById(id);
      if (data) {
        setData(data);
      }
    };
    getData();
  }, [id]);

  const handleChangeImages = (selected) => {
    setImageFirst(selected);
  };

  return (
    <LayoutPage>
      <div className="directional">
        <h1>
          <Link to="/" style={{ color: "#ab7a5f" }}>
            Home /
          </Link>
          <span>
            <Link to="/products" style={{ color: "#ab7a5f" }}>
              Products /
            </Link>
          </span>
          <span style={{ textTransform: "capitalize" }}>
            {data && data.name}
          </span>
        </h1>
      </div>
      <Row
        style={{ padding: "80px 125px 130px 125px", backgroundColor: "#fff" }}
      >
        <Col span={24} className="container_detail">
          <Button className="detail_button_prodduct">
            <Link to="/products">back to products</Link>
          </Button>
        </Col>
        <Row>
          {data ? (
            <>
              <Col span={12}>
                <img src={imageFirst} className="detail_img" alt="" />

                <Row>
                  <Col
                    span={24}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 10,
                      cursor: "pointer",
                    }}
                    className="detail_img_small"
                  >
                    <img
                      src={image.length > 0 ? image[0] : null}
                      alt=""
                      onClick={() => handleChangeImages(image[0])}
                    />
                    <img
                      src={image.length > 0 ? image[1] : null}
                      alt=""
                      onClick={() => handleChangeImages(image[1])}
                    />
                    <img
                      src={image.length > 0 ? image[2] : null}
                      alt=""
                      onClick={() => handleChangeImages(image[2])}
                    />
                    <img
                      src={image.length > 0 ? image[3] : null}
                      alt=""
                      onClick={() => handleChangeImages(image[3])}
                    />
                    <img
                      src={image.length > 0 ? image[4] : null}
                      alt=""
                      onClick={() => handleChangeImages(image[4])}
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={12} style={{ paddingLeft: 50 }}>
                <h1
                  style={{
                    fontWeight: "bold",
                    fontSize: 40,
                    textTransform: "capitalize",
                  }}
                >
                  {data.name}
                </h1>
                <div style={{ display: "flex" }}>
                  <Rate allowHalf value={data.stars} />
                  <p style={{ fontSize: "16px", margin: "5px 10px " }}>
                    {data.reviews} customer reviews
                  </p>
                </div>
                <div
                  style={{
                    color: "#ab7a5f",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  ${" "}
                  {data.price
                    ? (data.price.toFixed(2) / 100).toLocaleString()
                    : null}
                </div>
                <p
                  style={{
                    fontSize: 15,
                    letterSpacing: 2,
                    lineHeight: 2,
                    marginTop: 10,
                  }}
                >
                  {data.description}
                </p>
                <div className="detail_info">
                  <h3>Available :</h3>
                  <span>In Stock</span>
                </div>
                <div className="detail_info">
                  <h3>SKU :</h3>
                  <span>{data.id}</span>
                </div>
                <div className="detail_info">
                  <h3>Brand :</h3>
                  <span>{data.company}</span>{" "}
                </div>

                <hr />
                <div style={{ display: "flex" }}>
                  <h3>Colors :</h3>
                  {data.colors
                    ? data.colors.map((item, index) => (
                        <div
                          className="detail_info_colors"
                          style={{ backgroundColor: item }}
                          key={index}
                        />
                      ))
                    : null}
                </div>
                <div className="detail_button_color">
                  <button onClick={() => setCount(count - 1)}>-</button>
                  <button>{count}</button>
                  <button onClick={() => setCount(count + 1)}>+</button>
                </div>
                <Button className="detail_button_prodduct" onClick={() => addCart(data.id)}>
                  <Link to="/cart" >
                    add to cart
                  </Link>
                </Button>
              </Col>
            </>
          ) : null}
        </Row>
      </Row>
    </LayoutPage>
  );
}

export default React.memo(DetailProducts);
