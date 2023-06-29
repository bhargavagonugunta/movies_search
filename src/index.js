import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Headders from "./Componets/Headder";
import Search from "./Componets/Search";
import Result from "./Componets/Result";
import { useEffect, useState } from "react";
import { setlog } from "./Componets/Login";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Login from "./Componets/Login";
import Chat from "./Componets/Chat";

const Applayout = () => {
  const navigate = useNavigate();
  const [islogin, setislogin] = useState(false);
  useEffect(() => {
    if (!islogin) {
      navigate("/Login");
      console.log("login handler");
    }
  }, [navigate, islogin]);

  return (
    <>
      <Headders />
      <Search />
      <Outlet />
    </>
  );
};

const Rout = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "/Chat",
    element: <Chat />,
  },
  {
    path: "/Search",
    element: <Search />,
  },
]);
//console.log(typeof Rout)
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<RouterProvider router={routers} />);
ReactDOM.render(
  <RouterProvider router={Rout} />,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
