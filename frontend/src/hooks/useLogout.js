import {useAuthContext} from '../hooks/useAuthContext'

export const useLogout = () => {
    const {dispatch} = useAuthContext()
    const logout = () => {
        /*If there is no User information in the local Storage, 
        it will delete user from session storage
        if false, will delete user from local storage*/

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