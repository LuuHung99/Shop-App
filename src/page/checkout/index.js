import React from 'react';
import LayoutPage from "../../components/Layout";
 import Directional from "../../components/Directional";
function CheckOut(props) {
    return (
        <LayoutPage>
            <Directional />
            <h1>Hello Chekc out</h1>
        </LayoutPage>
    );
}

export default React.memo(CheckOut);