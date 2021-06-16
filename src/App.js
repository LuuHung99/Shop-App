import React, { useEffect } from "react";
import PageComponent from "./page/index";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import { BackTop } from "antd";

function AppShop() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_DATA_SHOP" });
  }, [dispatch]);
  
  return (
    <>
      <PageComponent />
      <BackTop style={{paddingLeft: 40}} />
    </>
  );
}

export default AppShop;
