import React from 'react';
import LayoutPage from "../../components/Layout";
import Directional from '../../components/Directional';
import {Row, Col} from "antd";

function AboutPage(props) {
    return (
        <LayoutPage>
            <Directional />
            <Row style={{padding: '80px 125px', backgroundColor: '#fff'}}>
                <Col span={12}>
                    <img src="/images/hero-2.jpeg" style={{width: '90%', height: '500px'}} />
                </Col>
                <Col span={12} >
                    <h1 style={{fontSize: '40px', fontWeight: 'bold'}}>
                        Our story
                    </h1>
                    <hr style={{width: '100px', height: '4px', backgroundColor: '#ab7a5f', border: 'none', position: 'absolute', top: 55}} />
                    <p style={{letterSpacing: 2, fontSize: 16}}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.
                    </p>
                </Col>
            </Row>
        </LayoutPage>
    );
}

export default React.memo(AboutPage);