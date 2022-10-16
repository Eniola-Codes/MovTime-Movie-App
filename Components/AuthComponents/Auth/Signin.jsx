import Input from "../../Ui/Input/Input";
import Layout from "../Layout/layout";
import Link from "next/link";
import classes from "../../../styles/AuthStyle/Auth.module.css";
import Button from "../../Ui/Button/button";
import { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const userData = {
      email,
      password,
    };

    console.log(userData);

    setEmail('');
    setPassword('');
  };

  return (
    <Layout>
      <div>
        <span className={classes.head_text}>Sign In</span>
        <p className={classes.head_smalltext}>
          Never miss out on the best movies!
        </p>
      </div>
      <div>
        <form onSubmit={onSubmitHandler}>
        <Input type="email" placeholder="Email Address" value={email} onChange={emailHandler}/>
        <Input type="password" placeholder="Password" value={password} onChange={passwordHandler}/>
        <Button>Sign In</Button>
        </form>
        <p className={classes.end_text}>
          Don't have an account yet? <Link href="/auth/signup">sign up</Link>
        </p>
      </div>
    </Layout>
  );
};

export default Signin;
