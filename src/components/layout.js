import React from 'react';
import { Layout} from 'antd';
import FooterPage from './Footer';
import HeaderPage from './Header';

const {Content} = Layout;

function LayoutPage(props) {
    return (
        <Layout>
            <HeaderPage />
            <Content>
                {props.children}
            </Content>
            <FooterPage />
        </Layout>
    );
}

export default React.memo(LayoutPage);