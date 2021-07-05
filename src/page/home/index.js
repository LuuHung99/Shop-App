import React from "react";
import LayoutPage from "../../components/Layout";
import IntroductionShop from "./IntroductionShop";
import FeatureProducts from "./FeatureProducts";
import CustomFurniture from "./CustomFurniture";
import SearchShop from "./Search";
import "./css/style.css";

function HomePage(props) {
  return (
    <LayoutPage className="layout-page">
      <IntroductionShop />
      <FeatureProducts />
      <CustomFurniture />
      <SearchShop />
    </LayoutPage>
  );
}

export default React.memo(HomePage);
