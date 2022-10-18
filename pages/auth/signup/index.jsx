import Signup from "../../../Components/AuthComponents/Auth/Signup";
import useAuthRequest from "../../../hooks/authRequest-hook";

const SIGN_UP_API =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdX7C8kYeXVItVsnaexDchsJUjydBa95o";

const index = () => {
  const { isLoading, isError, onAuthHandler } = useAuthRequest(SIGN_UP_API);

  return (
    <Signup onSignUp={onAuthHandler} isLoading={isLoading} isError={isError} />
  );
};

export default index;
