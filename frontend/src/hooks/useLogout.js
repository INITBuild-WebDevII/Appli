import {useAuthContext} from '../hooks/useAuthContext'

export const useLogout = () => {
    const {dispatch} = useAuthContext()
    const logout = () => {
        //remove localStorage
        localStorage.removeItem('user')

        //dispatch logout aciton
        dispatch({type: 'LOGOUT'})
    }

    return {logout}
}