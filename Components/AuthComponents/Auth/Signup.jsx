import Input from "../../Ui/Input/Input";
import Layout from '../Layout/Layout'
import Link from "next/link";
import classes from "../../../styles/AuthStyle/Auth.module.css";
import Button from "../../Ui/Button/button";
import useAuth from "../../../hooks/authValidation-hook";

const Signup = (props) => {
  const {
    emailState,
    passState,
    initialState,
    userState,
    error_message,
    usernameHandler,
    emailHandler,
    passwordHandler,
    setInitialState,
  } = useAuth();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const userData = {
      username: userState.value,
      email: emailState.value,
      password: passState.value,
    };

    if (userState.isValid && emailState.isValid && passState.isValid) {
      setInitialState(true);
    } else {
      setInitialState(null);
      return;
    }

    props.onSignUp(userData);

    userState.value = "";
    emailState.value = "";
    passState.value = "";
  };

  let userValidity = "";
  let emailValidity = "";
  let passValidity = "";

  if (!initialState) {
    userValidity = userState.isValid ? "" : classes.invalid;
    emailValidity = emailState.isValid ? "" : classes.invalid;
    passValidity = passState.isValid ? "" : classes.invalid;
    if (!userState.isValid) {
      error_message = "Please input a valid username";
    } else if (!emailState.isValid) {
      error_message = "Please input a valid email address";
    } else if (!passState.isValid) {
      error_message = "Password must be more than 6 characters";
    }
  }

  let button_text;

  if (props.isLoading && !props.isError) {
    button_text = <>Loading...</>;
  } else if (props.isError) {
    button_text = <>Something went wrong...</>;
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
      {error_message && (
        <div className={classes.form_error}>
          <span>{error_message}</span>
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