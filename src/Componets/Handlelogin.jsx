import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Result from "./Result";

export const Handlelogin = (username, password,setislogin) => {
 
  async function login(username, password, setislogin) {
    const response = await axios.get("http://localhost:3001/api/login", {
      params: {
        username,
        password,
      },
    });
    const result = await response.json;
    console.log(result);
    setislogin(true);
   
  }

  login(username, password, setislogin);
};
