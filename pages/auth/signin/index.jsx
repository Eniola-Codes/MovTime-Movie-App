import Signin from "../../../Components/AuthComponents/Auth/Signin";
import { useState } from "react";
import { useRouter } from "next/router";

const SIGN_UP_API =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdX7C8kYeXVItVsnaexDchsJUjydBa95o";

const index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const router = useRouter();

  const onSignInHandler = (userData) => {
    const authSignin = async () => {
      setIsLoading(true);
      setIsError(null);
      try {
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

        router.replace("/");
      } catch (error) {
        setIsError(true);
      }
    };

    authSignin();
  };
  return (
    <Signin
      onSignIn={onSignInHandler}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default index;
