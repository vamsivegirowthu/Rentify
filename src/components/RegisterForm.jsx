import React, { useState } from 'react';
import styles from './RegisterForm.module.scss';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        userType: 'buyer', // or 'seller'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send formData to backend
        const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const result = await response.json();
        // Handle result (e.g., show success message or handle errors)
    };

    return (
        <form className={styles.registerForm} onSubmit={handleSubmit}>
            <input
                className={styles.formInput}
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
            />
            <input
                className={styles.formInput}
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
            />
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
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                required
            />
            <select
                className={styles.formInput}
                name="userType"
                value={formData.userType}
                onChange={handleChange}
            >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
            </select>
            <button className={styles.formButton} type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
