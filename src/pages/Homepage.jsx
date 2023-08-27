import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Homepage = () => {
  const [menus, setMenus] = useState([]);
  const navigate = useNavigate();
  const getMenus = () => {
    axios
      .get("https://api.mudoapi.tech/menus")
      .then((res) => {
        const data = res?.data?.data?.Data;
        setMenus(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    getMenus();
  }, []);

  return (
    <div>
      <h1>ini homepage</h1>
      {menus.map((item, key) => (
        <div key={key} style={{ marginBottom: "40px" }}>
          <h3> {item.name}</h3>
          <p>{item.description}</p>
          <button onClick={() => handleDetail(item.id)}>Detail</button>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
