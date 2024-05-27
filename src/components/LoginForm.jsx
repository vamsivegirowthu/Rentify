import React, { useState } from 'react';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle login logic
    };

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <input
                className={styles.formInput}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <input
                className={styles.formInput}
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
            />
            <button className={styles.formButton} type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
