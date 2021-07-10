import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/style.css";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import { PostLogin } from "../../services/login";

function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //username: admin
  //password: abc123

  const history = useHistory();

  const handleSubmit = async () => {
    const account = { username, password, _app_secretKey: "secretKey" };

    const res = await PostLogin(account);

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
    }
    const key = "updatable";
    if (window.localStorage.token) {
      setTimeout(() => {
        message.success({ content: "Đăng nhập thành công", key, duration: 2 });
        history.push("/");
      }, 1500);
    }

    // if(res.code === 400){
    //   setTimeout(() => {
    //     message.error("Tài khoản không có trong hệ thống!");
    //   }, 1000);
    // }
  };
  return (
    <div className="container_login">
      <div className="block_login">
        <div className="header_login">
          <img src="/images/badge.png" alt="" />
          <h2>Log In</h2>
        </div>
        <div className="change_login">
          <Link to="login">Log in</Link>
          <Link to="register">Sign up</Link>
        </div>
        <div className="button_login">
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
            <input
              type="email"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <img src="/images/padlock.png" alt="" style={{ width: "10%" }} />
            <input
              type="pass"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div style={{ margin: 25, fontWeight: 600 }}>
          <p>Don't remember your password?</p>
        </div>
        <div className="next_login">
          <button
            onClick={handleSubmit}
            style={{
              color: "#fff",
              border: "none",
              background: "none",
              textTransform: "uppercase",
              fontWeight: 500,
              cursor: "pointer"
            }}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(LoginPage);
