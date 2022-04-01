import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { projectAuth } from '../firebase/config'

export const useLogout = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        setError(null)
        setIsPending(true)

        await projectAuth.signOut()

        dispatch({ type: 'LOGOUT' })

        setIsPending(false)
        setError(null)

        try {

        } catch(err) {
            console.log(err.messgage)
            setError(err.messgage)
            setIsPending(false)
        }
    }

    return { error, isPending, logout }
}