import { useState } from "react";
import { useRouter } from "next/router";

const useAuthRequest = (AUTH_API) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const router = useRouter();

  const onAuthHandler = async (userData) => {
    setIsLoading(true);
    setIsError(null);
    try {
      const response = await fetch(AUTH_API, {
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
      if (data.idToken) {
        router.replace("/");
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return {
    isLoading,
    isError,
    onAuthHandler,
  };
};

export default useAuthRequest;
