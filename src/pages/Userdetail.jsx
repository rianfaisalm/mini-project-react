import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const UserDetail = () => {
  const [menu, setMenu] = useState({});
  const param = useParams();

  console.log(param.userId);

  const getMenu = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${param?.userId}`)
      .then((res) => {
        setMenu(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div>
      <h1>Halaman Detail</h1>
      <h1>{menu?.name}</h1>
      <p>{menu?.description}</p>
      <img style={{ width: "200px" }} src={menu?.imageUrl} />
    </div>
  );
};

export default UserDetail;
