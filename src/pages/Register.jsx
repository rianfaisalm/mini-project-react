import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const Register = () => {
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
      .post("https://reqres.in/api/register", payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        localStorage.setItem("token", "12345");
        console.log(err);
      });
  };

  console.log("payload", email, password);
  return (
    <>
      <Navbar />
      <h1>Register</h1>
      <div>
        <input onChange={handleChangeEmail} placeholder="email" />
        <input onChange={handleChangePass} placeholder="password" />
      </div>
      <div>
        <button onClick={handleSubmit}>Register</button>
      </div>
    </>
  );
};

export default Register;
