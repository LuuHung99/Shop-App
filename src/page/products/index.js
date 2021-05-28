import React from "react";
import LayoutPage from "../../components/Layout";
import Directional from '../../components/Directional';
function ProductPage(props) {
  return (
    <LayoutPage>
        <Directional />
      <h1>Product Page</h1>
    </LayoutPage>
  );
}

export default React.memo(ProductPage);
