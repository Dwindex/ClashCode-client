import React from 'react';
import NavBar from '@/components/shared/Navbar';
import styles from './Leaderboard.module.css'


const Leaderboard : React.FC = () => {
    return (
        <div className={styles.leaderboard}>
            <NavBar/>
            <h1>Hello</h1>
            
        </div>
    )
}

export default Leaderboard