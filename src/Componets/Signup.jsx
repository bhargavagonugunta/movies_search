import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [statuscheck, setstatuscheck] = useState(false);

  const SignUp = async () => {
    try {
      const response = axios.post("http://localhost:3005/api/SignUp", {
        email,
        username,
        password,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const usernamecheck = async () => {
    try {
      const response = await axios.get("http://localhost:3005/api/SignUp", {
        username,
      });

      if (response.status === 200) {
        setstatuscheck(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-t flex justify-center items-center from-cyan-900 to-sky-200 ">
      <div>
        <div className="w-[500px] h-[450px] h-screen-flex  content-center bg-slate-100 shadow-xl sm:shadow-black  rounded-lg ">
          <h1 className="text-center ">Sign Up</h1>
          <div className="ml-10">
            <h2 className=" mt-[30px]">Email: </h2>
            <input
              className={`w-[300px] h-[45px] mt-[10px] px-2  shadow-xl bg-[#f5ede6] shadow-blue-300 rounded-lg border-2 `}
              type="text"
              placeholder="Email"
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
            <h2 className="mt-2">Username: </h2>
            <input
              className={`w-[300px] h-[45px] mt-[10px] px-2 shadow-xl bg-[#f5ede6] shadow-blue-300 rounded-lg border-2 `}
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
            {statuscheck ? (
              <h3 className="cursor-pointer" onClick={() => usernamecheck()}>
                check?
              </h3>
            ) : (
              <h3 className="cursor-pointer">Username is Not available</h3>
            )}
            <h2 className="mt-5">Password:</h2>
            <input
              className={`w-[300px] h-[45px] mt-3 px-2 shadow-xl bg-[#f5ede6] shadow-blue-300 rounded-lg `}
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <br />
            <input
              id="draft"
              className="peer/draft mt-[20px] "
              type="checkbox"
              name="status"
            />
            <label className="peer-checked/draft:text-sky-500">
              Tearms and Conditions
            </label>
            <br />{" "}
            <button
              className="mt-6 ml-[220px] bg-yellow-200 w-[200px] hover:bg-yellow-300 border-2 h-8 rounded-xl shadow-lg shadow-blue-300 "
              onClick={() => SignUp()}
            >
              SignUp
            </button>
            <label className="ml-[200px] mt-4 pt-3 cursor-pointer "></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
