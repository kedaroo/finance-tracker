import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}>my money</li>

                <li>
                    <Link to='/login'>login</Link>
                </li>
                <li>
                    <Link to='/signup'>Signup</Link>
                </li>
            </ul>
        </nav>
    )
}