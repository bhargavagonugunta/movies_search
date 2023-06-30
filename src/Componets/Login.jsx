import { useState, useEffect } from "react";
import Result from "./Result";
import Search from "./Search";
import axios from "axios";
import { Link, useNavigate, Route } from "react-router-dom";
import { useContext } from "react";
import loginContext from "./loginContext";
export var setlog = false;
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState(" ");
  const nave = useNavigate();
  const serlogin = useContext(loginContext);
  const [val, setval] = useState(true);
  useEffect(() => {
    setval(true);
  }, [username, password]);
  const login = async () => {
    setval(false);
    try {
      const response = await axios.post("http://localhost:3005/api/login", {
        username,
        password,
      });
      const result = await response.data;
      if (response?.status === "200") {
        serlogin.loginstate = true;
        console.log("Result is", result);
      } else {
        setval(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-t flex justify-center items-center from-cyan-900 to-sky-200 ">
      <div>
        <div className="w-[500px] h-[400px] h-screen-flex  content-center bg-slate-100 shadow-xl sm:shadow-black  rounded-lg ">
          <h1 className="text-center ">Login</h1>
          <label className="ml-5">Username: </label>
          <input
            className={`w-[300px] h-[45px] mt-[60px] px-2 ml-3 shadow-xl bg-[#f5ede6] shadow-blue-300 rounded-lg border-2 ${
              val === false ? "border-red-500" : " "
            }`}
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
          <br />
          <label className="mt-3 ml-5">Password:</label>
          <input
            className={`w-[300px] h-[45px] mt-10 px-2 ml-5 shadow-xl bg-[#f5ede6] shadow-blue-300 rounded-lg border-2 ${
              val === false ? "border-red-500" : " "
            }`}
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <br />
          <input
            id="draft"
            class="peer/draft mt-[20px] ml-6 "
            type="radio"
            name="status"
            checked
          />
          <label for="draft" class="peer-checked/draft:text-sky-500">
            Terams and Conditions
          </label>
          <br />{" "}
          <button
            className="mt-6 ml-[250px] bg-green-400  w-[200px]  h-8 rounded-xl "
            onClick={() => login()}
          >
            Login
          </button>
          <label className="ml-[200px] mt-4 pt-3 cursor-pointer ">
            <Link to="/Signup"> Don't Have an accout Signup? </Link>
          </label>
        </div>
      </div>
    </div>
  );
};
export default Login;
