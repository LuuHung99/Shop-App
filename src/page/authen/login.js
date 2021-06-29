import React from "react";
import { Link } from "react-router-dom";
import "./css/style.css";

function LoginPage(props) {
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

export default React.memo(LoginPage);
