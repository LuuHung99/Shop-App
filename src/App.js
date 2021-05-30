import React, {useEffect} from "react";
import PageComponent from "./page/index";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";

function AppShop() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_DATA_SHOP" });
  }, [dispatch]);
  return (
    <>
      <PageComponent />
    </>
  );
}

export default AppShop;
