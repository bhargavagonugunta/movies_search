import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Headders from "./Componets/Headder";
import Search from "./Componets/Search";
import Result from "./Componets/Result";
import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Componets/Login";
import Chat from "./Componets/Chat";
import loginContext from "./Componets/loginContext";
import Simmer from "./Componets/Simmer";
import Signup from "./Componets/Signup";
import store from "./Componets/store";
import { Provider, useSelector } from "react-redux";


const Applayout = () => {
  const Loginstate = useSelector((state) => {
    return state.isLogin;
  });
 

  return (
    <>
      <Headders />
      <Search />
      <Routes>
        <Route
          path="/"
          element={ <Outlet /> }
        />
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
          <Route path="/*" element={<Applayout /> }/>
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
