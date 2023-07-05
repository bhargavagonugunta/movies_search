import { useState, useEffect } from "react";
import Result from "./Result";
import Search from "./Search";
import axios from "axios";
import { Link, useNavigate, useHistory } from "react-router-dom";
import { useContext } from "react";
import loginContext from "./loginContext";
import { useDispatch, useSelector } from "react-redux";
import store from "./store";
export var setlog = false;
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState(" ");
  const nave = useNavigate();
  const [val, setval] = useState(false);
  const dispach = useDispatch();
  const Loginstate = useSelector((state) => {
    return state.isLogin;
  });

  useEffect(() => {}, [username, password]);
  const login = async () => {
    try {
      const response = await axios.post("http://localhost:3005/api/login", {
        username,
        password,
      });
      const result = await response.data;
      const stat = typeof response.status;
      console.log(stat);
      if (response.status !== 200) {
        console.log("true");
      } else {
        setval(true);
        dispach({ type: "SET_LOGIN", payload: val });
        console.log("Result is", result);
      }
    } catch (err) {
      //  setlog.setLoginState(val);
      console.log(err);
    }
  };
  useEffect(() => {
    if (!Loginstate) {
      nave("/Login");
      console.log("login handler");
    } else {
      nave("/");
      console.log("Loging successfull");
    }
  }, [Loginstate, val]);

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
            className="peer/draft mt-[20px] ml-6 "
            type="checkbox"
            name="status"
          />
          <label className="peer-checked/draft:text-sky-500">
            Tearms and Conditions
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
