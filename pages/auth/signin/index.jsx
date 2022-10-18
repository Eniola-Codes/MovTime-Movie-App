import Signin from "../../../Components/AuthComponents/Auth/Signin";
import useAuthRequest from "../../../hooks/authRequest-hook";

const SIGN_IN_API =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdX7C8kYeXVItVsnaexDchsJUjydBa95o";

const index = () => {
  const { isLoading, isError, onAuthHandler } = useAuthRequest(SIGN_IN_API);

  return (
    <Signin onSignIn={onAuthHandler} isLoading={isLoading} isError={isError} />
  );
};

export default index;
