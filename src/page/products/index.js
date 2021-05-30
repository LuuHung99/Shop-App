import React from "react";
import LayoutPage from "../../components/Layout";
import Directional from '../../components/Directional';
import SidebarProduct from "../products/components/sidebar";

function ProductPage(props) {
  return (
    <LayoutPage>
        <Directional />
        <SidebarProduct />
    </LayoutPage>
  );
}

export default React.memo(ProductPage);
