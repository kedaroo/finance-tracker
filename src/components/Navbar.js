import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

import styles from './Navbar.module.css'

export default function Navbar() {

    const { user } = useAuthContext()
    const { logout } = useLogout()

    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}>my money</li>

                <li>
                    <Link to='/login'>login</Link>
                </li>
                <li>
                    <Link to='/signup'>signup</Link>
                </li>
                {user && 
                    <li>
                        <button className='btn' onClick={logout}>logout</button>
                    </li>}
                
            </ul>
        </nav>
    )
}