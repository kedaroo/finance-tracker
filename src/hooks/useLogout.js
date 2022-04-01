import { useState, useEffect } from 'react'
import { useAuthContext } from './useAuthContext'
import { projectAuth } from '../firebase/config'

export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        setError(null)
        setIsPending(true)

        await projectAuth.signOut()

        dispatch({ type: 'LOGOUT' })

        if (!isCancelled) {
            setIsPending(false)
            setError(null)
        }

        try {

        } catch(err) {
            console.log(err.messgage)
            setError(err.messgage)
            setIsPending(false)
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { error, isPending, logout }
}