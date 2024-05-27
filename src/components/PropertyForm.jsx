import React, { useState } from 'react';
import styles from './PropertyForm.module.scss';

const PropertyForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        place: '',
        area: '',
        bedrooms: '',
        bathrooms: '',
        nearbyHospitals: '',
        nearbyColleges: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className={styles.propertyForm} onSubmit={handleSubmit}>
            <input
                className={styles.formInput}
                type="text"
                name="place"
                value={formData.place}
                onChange={handleChange}
                placeholder="Place"
                required
            />
            <input
                className={styles.formInput}
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="Area"
                required
            />
            <input
                className={styles.formInput}
                type="number"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                placeholder="Bedrooms"
                required
            />
            <input
                className={styles.formInput}
                type="number"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
                placeholder="Bathrooms"
                required
            />
            <input
                className={styles.formInput}
                type="text"
                name="nearbyHospitals"
                value={formData.nearbyHospitals}
                onChange={handleChange}
                placeholder="Nearby Hospitals"
                required
            />
            <input
                className={styles.formInput}
                type="text"
                name="nearbyColleges"
                value={formData.nearbyColleges}
                onChange={handleChange}
                placeholder="Nearby Colleges"
                required
            />
            <textarea
                className={styles.formInput}
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                required
            />
            <button className={styles.formButton} type="submit">Submit</button>
        </form>
    );
};

export default PropertyForm;
