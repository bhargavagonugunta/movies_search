import { createContext } from "react";

const loginContext = createContext({
  loginstate: false,
  setLoginState: () => {},
});
export default loginContext;
