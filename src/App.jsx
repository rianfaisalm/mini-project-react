import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import { useRoutes } from "react-router";
import "./App.css";
import UserDetail from "./pages/Userdetail";

const routes = [
  { path: "/", element: <Homepage /> },
  { path: "/login", element: <Login /> },
  { path: "/detail/:userId", element: <UserDetail /> },
];

function App() {
  const element = useRoutes(routes);

  return element;
}

export default App;
