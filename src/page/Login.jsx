import React from "react";
import "../assets/css/Login.css";
import logo from "../assets/img/PTPN-4.png";
import loginImage from "../assets/img/login image.png";

const Login = () => {
  return (
    <div className="bg-login">
      <div className="login-page">
        <div className="login-container">
          <div className="login-left">
            <img
              src={loginImage}
              alt="Illustration"
              className="login-illustration"
            />
          </div>
          <div className="login-right">
            <div className="logo-title">
              <img src={logo} alt="PTPN4 Logo" className="logo" />
              <h2 className="title">DASHBOARD TANAM ULANG</h2>
            </div>

            <form className="login-form">
              <label>Username</label>
              <input type="text" name="username" />

              <label>Password</label>
              <input type="password" name="password" />

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
