import React, { useState } from "react";
import "../assets/css/Login.css";
import logo from "../assets/img/PTPN-4.png";
import loginImage from "../assets/img/login image.png";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Username dan Password tidak boleh kosong");
    } else {
      setError("");

      console.log("Logging in with:", username, password);
      try {
        const res = await axios.post("", {
          username,
          password,
        });
        console.log(res);
      } catch (err) {}
    }
  };

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

            <form className="login-form" onSubmit={handleSubmit}>
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <p className="error-message">{error}</p>}

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
