import { useState } from "react";
import Signup from "../../../Components/AuthComponents/Auth/Signup";
import { useRouter } from "next/router";

const SIGN_UP_API =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdX7C8kYeXVItVsnaexDchsJUjydBa95o";

const index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSignUpHandler = (userData) => {
    const authSignup = async () => {
      setIsLoading(true);
      const response = await fetch(SIGN_UP_API, {
        method: "POST",
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsLoading(false);

      const data = await response.json();

      console.log(data.email);
      console.log(data.idToken);

      router.push("/");
    };

    authSignup();
  };

  return <Signup onSignUp={onSignUpHandler} isLoading={isLoading} />;
};

export default index;
