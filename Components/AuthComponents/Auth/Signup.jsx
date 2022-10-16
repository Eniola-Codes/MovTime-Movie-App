import Input from "../../Ui/Input/Input";
import Layout from "../Layout/layout";
import Link from "next/link";
import classes from "../../../styles/AuthStyle/Auth.module.css";
import Button from "../../Ui/Button/button";
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
      isValid: action.val.trim().length > 6,
    };
  }
  return { value: "", isValid: false };
};

const Signup = (props) => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [userState, dispatchUser] = useReducer(userReducer, {
    value: "",
    isValid: null,
  });
  const [passState, dispatchPass] = useReducer(passReducer, {
    value: "",
    isValid: null,
  });
  const [formIsValid, setFormIsValid] = useState(null);

  const usernameHandler = (event) => {
    dispatchUser({ type: "USER_INPUT", val: event.target.value });
    setFormIsValid(null);
  };

  const emailHandler = (event) => {
    dispatchEmail({ type: "USER_EMAIL", val: event.target.value });

    if (emailState.isValid) {
      setFormIsValid(null);
    }
  };

  const passwordHandler = (event) => {
    dispatchPass({ type: "USER_PASS", val: event.target.value });

    if (passState.isValid) {
      setFormIsValid(null);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const userData = {
      username: userState.value,
      email: emailState.value,
      password: passState.value,
    };

    if (!userState.isValid) {
      setFormIsValid("Please input a valid username.");
      return;
    }

    if (!emailState.isValid) {
      setFormIsValid("Please input a valid email address.");
      return;
    }
    if (!passState.isValid) {
      setFormIsValid("Password must be more than 6 characters");
      return;
    }

    props.onSignUp(userData);

    userState.value = "";
    emailState.value = "";
    passState.value = "";
  };

  const userValidity = userState.isValid ? "" : classes.invalid;
  const emailValidity = emailState.isValid ? "" : classes.invalid;
  const passValidity = passState.isValid ? "" : classes.invalid;

  let button_text;

  if (props.isLoading) {
    button_text = <>Loading...</>;
  } else {
    button_text = <>Sign Up</>;
  }

  return (
    <Layout>
      <div>
        <span className={classes.head_text}>Sign Up</span>
        <p className={classes.head_smalltext}>
          Join our community and get access top rated movies
        </p>
      </div>
      {formIsValid && (
        <div className={classes.form_error}>
          <span>{formIsValid}</span>
        </div>
      )}
      <form onSubmit={onSubmitHandler}>
        <Input
          type="username"
          placeholder="User Name"
          onChange={usernameHandler}
          value={userState.value}
          className={userValidity}
        />
        <Input
          type="email"
          placeholder="Email Address"
          onChange={emailHandler}
          value={emailState.value}
          className={emailValidity}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={passwordHandler}
          value={passState.value}
          className={passValidity}
        />
        <Button>{button_text}</Button>
        <p className={classes.end_text}>
          Don't have an account yet? <Link href="/auth/signin">sign in</Link>
        </p>
      </form>
    </Layout>
  );
};

export default Signup;
