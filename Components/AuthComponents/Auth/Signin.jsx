import Input from "../../Ui/Input/Input";
import Layout from '../Layout/Layout'
import Link from "next/link";
import classes from "../../../styles/AuthStyle/Auth.module.css";
import Button from "../../Ui/Button/button";
import useAuth from "../../../hooks/authValidation-hook";

const Signin = (props) => {
  const {
    emailState,
    passState,
    initialState,
    emailHandler,
    passwordHandler,
    setInitialState,
  } = useAuth();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const userData = {
      email: emailState.value,
      password: passState.value,
    };

    if (emailState.isValid && passState.isValid) {
      setInitialState(true);
    } else {
      setInitialState(null);
      return;
    }

    props.onSignIn(userData);

    emailState.value = "";
    passState.value = "";
  };

  let error_message = null;

  let emailValidity = "";
  let passValidity = "";

  if (!initialState) {
    emailValidity = emailState.isValid ? "" : classes.invalid;
    passValidity = passState.isValid ? "" : classes.invalid;
    if (!emailState.isValid) {
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
    button_text = <>Sign in</>;
  }

  return (
    <Layout>
      <div>
        <span className={classes.head_text}>Sign In</span>
        <p className={classes.head_smalltext}>
          Never miss out on the best movies!
        </p>
      </div>
      {error_message && (
        <div className={classes.form_error}>
          <span>{error_message}</span>
        </div>
      )}
      <div>
        <form onSubmit={onSubmitHandler}>
          <Input
            type="email"
            placeholder="Email Address"
            value={emailState.value}
            onChange={emailHandler}
            className={emailValidity}
          />
          <Input
            type="password"
            placeholder="Password"
            value={passState.value}
            onChange={passwordHandler}
            className={passValidity}
          />
          <Button>{button_text}</Button>
        </form>
        <p className={classes.end_text}>
          Don't have an account yet? <Link href="/auth/signup">sign up</Link>
        </p>
      </div>
    </Layout>
  );
};

export default Signin;
