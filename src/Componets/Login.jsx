import { useState } from "react";
import { Handlelogin } from "./Handlelogin";
import Result from "./Result";
const Login = () => {
  const [username, setusername] = useState(" ");
  const [password, setpassword] = useState(" ");
  const [islogin, setislogin] = useState(false);
  if (islogin) {
    return <Result />;
  }
  return (
    <div className="w-full h-screen bg-gradient-to-t flex justify-center items-center from-cyan-900 to-sky-200 ">
      <div>
        <form className="w-[400px] h-[300px] h-screen-flex  content-center bg-slate-100 shadow-xl sm:shadow-black  rounded-lg ">
          <h1 className="text-center ">Login</h1>
          <label className="ml-5">Username: </label>
          <input
            className="w-[200px] h-[30px] mt-7 px-2 ml-3 shadow-xl bg-[#f5ede6] shadow-blue-300 rounded-lg"
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
          <br />
          <label className="mt-3 ml-5">Password:</label>
          <input
            className="w-[200px] mt-10 h-[30px] ml-4 shadow-xl px-2 bg-[#f5ede6] shadow-blue-300 rounded-lg"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <br />
          <input
            type="checkbox"
            name="checkbox"
            value="Tearms and conditions"
            id="term"
            className="mt-6 ml-4"
          ></input>
          <label className="ml-3 mt-4" htmlFor="term">
            Aggre Terms and Conditions{" "}
          </label>
          <br />
          <button
            className="mt-6 ml-[250px] bg-green-400  w-[100px]  h-8 rounded-lg "
            onClick={() => Handlelogin(username, password, setislogin)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
