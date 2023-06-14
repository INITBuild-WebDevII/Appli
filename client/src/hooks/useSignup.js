import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (username, email, password) => {
    setIsLoading(true);
    setError(null);

    axios
      .post("/api/user/register", {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        //save user to local storage
        localStorage.setItem("user", JSON.stringify(response.data));

        //update auth context
        dispatch({ type: "LOGIN", Payload: response.data });

        setIsLoading(false);
      })
      .catch(function (error) {
        setIsLoading(false);
        setError(error.response.data.error);
      });
  };
  return { signup, isLoading, error };
};
