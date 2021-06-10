import React from 'react';
import LayoutPage from "../../components/Layout";
 
function CheckOut(props) {
    return (
        <LayoutPage>
            <h1>Hello Chekc out</h1>
        </LayoutPage>
    );
}

export default React.memo(CheckOut);