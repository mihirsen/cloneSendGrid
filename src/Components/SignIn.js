import React, { useState } from "react";
import logo from "../Assests/logo.svg";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-form">
      <div className="form-logo">
        {" "}
        <img src={logo} id="signIn-logo" />
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="Username"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>

          <div className="f-y-p">Forgot Your Password?</div>
          <button type="submit" id="login">
            Login
          </button>
          <div className="detail">Log in with single sign-on (SSO) instead</div>
          <Link to="/" id="link">
            <div className="back-btn">Back To Home</div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
