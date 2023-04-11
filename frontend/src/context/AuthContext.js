import {createContext, useEffect, useReducer } from 'react'

//Used to check if there is a User Login
export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {user: action}
        case "LOGOUT":
            return {user: null}
        default: return state
    }
}

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })
    
    useEffect(() => {
        const userL = JSON.parse(localStorage.getItem('user'))
        const userS = JSON.parse(sessionStorage.getItem('user'))
        if (userL) {
            dispatch({type: 'LOGIN', payload: userL})
        } else if (userS){
            dispatch({type: 'LOGIN', payload: userS})
        }
    }, [])
    console.log('AuthContext state: ', state)
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}