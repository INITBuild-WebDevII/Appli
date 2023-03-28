import { useState } from "react";
import {useAuthContext} from '../hooks/useAuthContext'
import axios from "axios";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async (Username, email, password) =>  {
        setIsLoading(true)
        setError(null)

axios.post('/api/user/signup', {
    Username: Username,
	email: email,
	password: password
})
.then(function (response) {
    //save user to local storage
    localStorage.setItem('user', JSON.stringify(response.data))
    //localStorage.setItem('user', JSON.stringify(response.data.token))
    //localStorage.setItem('user', JSON.stringify(response.data._id))

    //update auth context
    dispatch({type: 'LOGIN', Payload: response.data})
    
    setIsLoading(false)
})
.catch(function (error) {
    setIsLoading(false)
    setError(error.response.data.error)
});

    }
    return {signup, isLoading, error}
}