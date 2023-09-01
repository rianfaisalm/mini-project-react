import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";

const UserDetail = () => {
  const [item, setItem] = useState({});
  const param = useParams();

  console.log(param.userId);

  const getMenu = () => {
    axios
      .get(`https://reqres.in/api/users/${param?.userId}`)
      .then((res) => {
        setItem(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <img src={item.avatar} alt={`Avatar ${item.first_name}`} />
        <h2>{item.first_name} {item.last_name}</h2>
        <h3>Ini Email : {item?.email}</h3>
      </div>
    </>
  );
};

export default UserDetail;
