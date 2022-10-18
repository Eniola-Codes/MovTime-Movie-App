import { useState, useReducer } from "react";

const userReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 0 };
  }
  return { value: "", isValid: false };
};

const emailReducer = (state, action) => {
  if (action.type === "USER_EMAIL") {
    return {
      value: action.val,
      isValid: action.val.includes("@") && action.val.includes("."),
    };
  }
  return { value: "", isValid: false };
};

const passReducer = (state, action) => {
  if (action.type === "USER_PASS") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 5,
    };
  }
  return { value: "", isValid: false };
};

const useAuth = () => {
  const [userState, dispatchUser] = useReducer(userReducer, {
    value: "",
    isValid: null,
  });
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passState, dispatchPass] = useReducer(passReducer, {
    value: "",
    isValid: null,
  });
  const [initialState, setInitialState] = useState(true);

  const usernameHandler = (event) => {
    dispatchUser({ type: "USER_INPUT", val: event.target.value });
  };
  const emailHandler = (event) => {
    dispatchEmail({ type: "USER_EMAIL", val: event.target.value });
  };
  const passwordHandler = (event) => {
    dispatchPass({ type: "USER_PASS", val: event.target.value });
  };


  return {
    emailState,
    passState,
    userState,
    initialState,
    usernameHandler,
    emailHandler,
    passwordHandler,
    setInitialState,
  };
};

export default useAuth;
