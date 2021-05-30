import React from 'react';
import {Layout} from 'antd';

const  {Footer} = Layout;

function FooterPage(props) {
    return (
        <Footer style={{ textAlign: 'center', backgroundColor: 'black', color: 'white', fontSize: "18px" }}>© 2021 <span style={{color: '#ab7a5f'}}>ComfySloth</span> All rights reserved</Footer>
    );
}

export default React.memo(FooterPage);