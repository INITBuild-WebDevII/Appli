import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password, isRemember) => {
    setIsLoading(true);
    setError(null);

    axios
      .post("/api/users/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        //save user to local storage
        console.log(response.data);
        
        /*
        if (isRemember) {
          localStorage.setItem("user", JSON.stringify(response.data));
        } else {
          sessionStorage.setItem("user", JSON.stringify(response.data));
        }
        */
        sessionStorage.setItem("user", JSON.stringify(response.data));

        //update auth context
        dispatch({ type: "LOGIN", Payload: response.data });

        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.response.data.error);
      });
  };

  return { login, isLoading, error };
};
