import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import LayoutPage from "../../components/Layout";
import Directional from "../../components/Directional";
import "./css/style.css";
function LoginPage(props) {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    // <LayoutPage>
    //   <>
    //     <Directional />
    //     <Row
    //       style={{
    //         padding: "100px 0px 200px",
    //         background: "#fff",
    //         paddingLeft: "500px",
    //       }}
    //     >
    //       <Col
    //         span={24}
    //         style={{
    //           maxWidth: 500,
    //         }}
    //       >
    //         <Form
    //           name="normal_login"
    //           className="login-form"
    //           initialValues={{ remember: true }}
    //           onFinish={onFinish}
    //         >
    //           <Form.Item
    //             name="username"
    //             rules={[
    //               { required: true, message: "Please input your Username!" },
    //             ]}
    //           >
    //             <Input
    //               prefix={<UserOutlined className="site-form-item-icon" />}
    //               placeholder="Username"
    //             />
    //           </Form.Item>
    //           <Form.Item
    //             name="password"
    //             rules={[
    //               { required: true, message: "Please input your Password!" },
    //             ]}
    //           >
    //             <Input
    //               prefix={<LockOutlined className="site-form-item-icon" />}
    //               type="password"
    //               placeholder="Password"
    //             />
    //           </Form.Item>
    //           <Form.Item>
    //             <Button
    //               type="primary"
    //               htmlType="submit"
    //               className="login-form-button"
    //             >
    //               Log in
    //             </Button>
    //             <Link to="/register">Register now!</Link>
    //           </Form.Item>
    //         </Form>
    //       </Col>
    //     </Row>
    //   </>
    // </LayoutPage>

    <div className="container_login">
      <div className="block_login">
        <div className="header_login">
          <img src="/images/badge.png" alt="" />
          <h2>Github Users</h2>
        </div>
        <div className="change_login">
          <div>Log in</div>
          <div>Sign up</div>
        </div>
        <div
          className="button_login"
           
        >
          <button style={{ marginBottom: 15 }}>
            <img src="/images/search.png" alt="" />
            Sign in with Google
          </button>
          <button>
            <img src="/images/twitter.png" alt="" />
            Sign in with Twitter
          </button>
        </div>
        <div>or</div>
        <div className="input_login">
          <div>
            <img
              src="/images/contact.png"
              alt=""
              style={{ width: "10%", paddingRight: 5 }}
            />
            <input type="email" placeholder="yours@example.com" />
          </div>
          <div>
            <img src="/images/padlock.png" alt="" style={{ width: "10%" }} />
            <input type="email" placeholder="your password" />
          </div>
        </div>
        <div style={{ margin: 25, fontWeight: 600 }}>
          <p>Don't remember your password?</p>
        </div>
        <div className="next_login"><Link to="/" style={{color: '#fff'}}>Log in</Link></div>
      </div>
    </div>
  );
}

export default LoginPage;
