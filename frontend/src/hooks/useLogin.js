import { useState } from "react";
import {useAuthContext} from '../hooks/useAuthContext'
import axios from "axios";


export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()


    const login = async (email, password, isRemember) =>  {
        setIsLoading(true)
        setError(null)

//Going through the login function from the userController
axios.post('/api/user/login', {
	email: email,
	password: password
})
.then(function (response) {
    /*If isRemember is true, will save user to local Storage
    if false, will save user to session storage*/
    if (isRemember) {
    localStorage.setItem('user', JSON.stringify(response.data))
    } else {

        sessionStorage.setItem('user', JSON.stringify(response.data))
    }
    //update auth context
    dispatch({type: 'LOGIN', Payload: response.data})
    
    setIsLoading(false)
})
.catch(function (error) {
    setIsLoading(false)
    setError(error.response.data.error)
});


    }
    return {login, isLoading, error}
}