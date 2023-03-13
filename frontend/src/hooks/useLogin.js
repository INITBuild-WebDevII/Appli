import { useState } from "react";
import {useAuthContext} from '../hooks/useAuthContext'
import axios from "axios";

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const login = async (email, password) =>  {
        setIsLoading(true)
        setError(null)

axios.post('/api/user/login', {
	email: email,
	password: password
})
.then(function (response) {
    //console.log(response.data)
    //save user to local storage
    localStorage.setItem('user', JSON.stringify(response))

    //update auth context
    dispatch({type: 'LOGIN', Payload: response})
    
    setIsLoading(false)
})
.catch(function (error) {
    setIsLoading(false)
    setError(error.response.data.error)
});

    }
    return {login, isLoading, error}
}