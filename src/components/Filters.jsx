import React, { useState } from 'react';
import styles from './Filters.module.scss';

const Filters = ({ onFilter }) => {
    const [filters, setFilters] = useState({
        place: '',
        minArea: '',
        maxArea: '',
        minBedrooms: '',
        maxBedrooms: '',
        minBathrooms: '',
        maxBathrooms: ''
    });

    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilter(filters);
    };

    return (
        <form className={styles.filters} onSubmit={handleSubmit}>
            <input
                className={styles.filterInput}
                type="text"
                name="place"
                value={filters.place}
                onChange={handleChange}
                placeholder="Place"
            />
            <input
                className={styles.filterInput}
                type="number"
                name="minArea"
                value={filters.minArea}
                onChange={handleChange}
                placeholder="Min Area"
            />
            <input
                className={styles.filterInput}
                type="number"
                name="maxArea"
                value={filters.maxArea}
                onChange={handleChange}
                placeholder="Max Area"
            />
            <input
                className={styles.filterInput}
                type="number"
                name="minBedrooms"
                value={filters.minBedrooms}
                onChange={handleChange}
                placeholder="Min Bedrooms"
            />
            <input
                className={styles.filterInput}
                type="number"
                name="maxBedrooms"
                value={filters.maxBedrooms}
                onChange={handleChange}
                placeholder="Max Bedrooms"
            />
            <input
                className={styles.filterInput}
                type="number"
                name="minBathrooms"
                value={filters.minBathrooms}
                onChange={handleChange}
                placeholder="Min Bathrooms"
            />
            <input
                className={styles.filterInput}
                type="number"
                name="maxBathrooms"
                value={filters.maxBathrooms}
                onChange={handleChange}
                placeholder="Max Bathrooms"
            />
            <button className={styles.filterButton} type="submit">
                Apply Filters
            </button>
        </form>
    );
};

export default Filters;
