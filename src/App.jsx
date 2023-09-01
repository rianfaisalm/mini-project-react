import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Listusers from "./pages/Listusers";
import Login from "./pages/Login";
import { useRoutes } from "react-router";
import "./App.css";
import UserDetail from "./pages/Userdetail";
import Register from "./pages/Register"

const routes = [
  { path: "/", element: <Listusers /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/detail/:userId", element: <UserDetail /> },
];

function App() {
  const element = useRoutes(routes);

  return element;
}

export default App;
