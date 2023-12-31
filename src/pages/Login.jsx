import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    const payload = {
      username: email,
      password: password,
    };

    axios
      .post("https://reqres.in/api/login", payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        localStorage.setItem("token", "abcdefg");
        console.log(err);
      });
  };

  console.log("payload", email, password);
  return (
    <>
      <Navbar />
      <h1>Login</h1>
      <div>
        <input onChange={handleChangeEmail} placeholder="email" />
        <input onChange={handleChangePass} placeholder="password" />
      </div>
      <div>
        <button onClick={handleSubmit}>Login</button>
      </div>
    </>
  );
};

export default Login;
