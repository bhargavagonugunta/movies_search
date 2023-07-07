import { createStore } from "redux";

const loginreduser = (state = { isLogin: false }, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return { ...state, isLogin: true };
    case "SET_LOGOUT":
      return { ...state, isLogin: false };
    default:
      return state;
  }
};

const store = createStore(loginreduser);

export default store;
