import {useAuthContext} from '../hooks/useAuthContext'

export const useLogout = () => {
    const {dispatch} = useAuthContext()
    const logout = () => {
        //remove localStorage
        if (JSON.parse(localStorage.getItem('user') === null)) {
            sessionStorage.removeItem('user')
        } else {
            localStorage.removeItem('user')
        }
        

        //dispatch logout aciton
        dispatch({type: 'LOGOUT'})
    }

    return {logout}
}