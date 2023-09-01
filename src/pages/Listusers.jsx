import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";

const Listusers = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const getUser = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        const data = res?.data?.data;
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <h1>INI LIST USERS</h1>
        {user.map((item, key) => (
          <div key={key} style={{ marginBottom: "40px" }}>
            <img src={item.avatar} alt={'Avatar'} />
            <h2>{item.first_name}</h2>
            <button onClick={() => handleDetail(item.id)}>Detail</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Listusers;
