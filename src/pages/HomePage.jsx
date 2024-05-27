import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.scss';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.homePage}>
            <h1 className={styles.header}>Welcome to Rentify</h1>
            <div className={styles.content}>
                <button className={styles.button} onClick={() => navigate('/buyer')}>
                    Find a Property
                </button>
                <button className={styles.button} onClick={() => navigate('/seller')}>
                    List Your Property
                </button>
            </div>
        </div>
    );
};

export default HomePage;
