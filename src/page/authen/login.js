import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import LayoutPage from "../../components/Layout";
import Directional from "../../components/Directional";
function LoginPage(props) {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <LayoutPage>
      <>
        <Directional />
        <Row
          style={{
            padding: "100px 0px 200px",
            background: "#fff",
            paddingLeft: "500px",
          }}
        >
          <Col
            span={24}
            style={{
              maxWidth: 500,
            }}
          >
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
                <Link to="/register">Register now!</Link>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </>
    </LayoutPage>
  );
}

export default LoginPage;
