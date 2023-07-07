import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Headders from "./Componets/Headder";
import Search from "./Componets/Search";
import Result from "./Componets/Result";
import { useEffect, useState } from "react";
import {
  Outlet,
  useNavigate,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./Componets/Login";
import Chat from "./Componets/Chat";
import Simmer from "./Componets/Simmer";
import Signup from "./Componets/Signup";
import store from "./Componets/store";
import { Provider, useSelector } from "react-redux";
const Applayout = () => {
  const isLoggedIn = useSelector((state) => {
    return state.isLogin;
  });
  console.log(isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/Login");
    }
  },[isLoggedIn,navigate]);
  return (
    <>
      <Headders />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Simmer" element={<Simmer />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/*" element={<Applayout />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
