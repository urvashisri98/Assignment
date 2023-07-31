import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onlogin = () => {
    const loginEmail = "Urvashi21@gmail.com";
    const loginPassword = "abc123";
    if (email === loginEmail && password === loginPassword) {
        const token = "gh7t3hvsvbxjj%fcbhcsdxcdhd@6482bvd";
        localStorage.setItem("token", token);
        if (token) {
        alert("Login successfully");
        navigate("/homepage");
        }
    } else {
      alert("please correct your credentials!!");
    }
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-heading">Login</div>
        <div className="login-data">
          <div className="login-email">
            <label className="subheading">Email Id</label>
            <input
              type="email"
              name="email"
              required
              placeholder="enter your email id"
              className="input-style"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-password">
            <label className="subheading">password</label>
            <input
              type="pasword"
              name="password"
              required
              placeholder="enter your password"
              className="input-style"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="login-button"
          onClick={() => onlogin()}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
