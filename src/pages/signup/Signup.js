import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

import styles from './Signup.module.css'

export default function Signup() {

    const [email, setEmail] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [password, setPassword] = useState('')
    const { error, isPending, signup } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, displayName)
    }

    return (
        <form className={styles['signup-form']} onSubmit={handleSubmit}>
            <h2>signup</h2>
            <label>
                <span>email:</span>
                <input 
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                <span>display name:</span>
                <input 
                    type='text'
                    onChange={(e) => setDisplayName(e.target.value)}
                    value={displayName}
                />
            </label>
            <label>
                <span>password:</span>
                <input 
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>

            <button className='btn' disabled={isPending ? true : false}>
                {isPending ? 'loading' : 'signup'}
            </button>

            {error && <p>{error}</p>}
            
        </form>
    )
}