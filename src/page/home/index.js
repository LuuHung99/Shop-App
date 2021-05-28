import React from "react";
import LayoutPage from "../../components/Layout";
import IntroductionShop from "./IntroductionShop";
import FeatureProducts from "./FeatureProducts";
import CustomFurniture from "./CustomFurniture";
import SearchShop from "./Search";

function HomePage(props) {
  return (
    <LayoutPage>
      <IntroductionShop />
      <FeatureProducts />
      <CustomFurniture />
      <SearchShop />
    </LayoutPage>
  );
}

export default React.memo(HomePage);
