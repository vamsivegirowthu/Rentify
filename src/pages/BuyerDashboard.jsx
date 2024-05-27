import React, { useState } from 'react';
import PropertyList from '../components/PropertyList';
import Filters from '../components/Filters';
import styles from './BuyerDashboard.module.scss';

const BuyerDashboard = ({ properties, onInterested }) => {
    const [filteredProperties, setFilteredProperties] = useState(properties);

    const handleFilter = (filters) => {
        // Apply filter logic here
        const filtered = properties.filter(property => {
            return (
                (filters.place ? property.place.includes(filters.place) : true) &&
                (filters.minArea ? property.area >= filters.minArea : true) &&
                (filters.maxArea ? property.area <= filters.maxArea : true) &&
                (filters.minBedrooms ? property.bedrooms >= filters.minBedrooms : true) &&
                (filters.maxBedrooms ? property.bedrooms <= filters.maxBedrooms : true) &&
                (filters.minBathrooms ? property.bathrooms >= filters.minBathrooms : true) &&
                (filters.maxBathrooms ? property.bathrooms <= filters.maxBathrooms : true)
            );
        });
        setFilteredProperties(filtered);
    };

    return (
        <div className={styles.buyerDashboard}>
            <h1 className={styles.header}>Available Properties</h1>
            <Filters onFilter={handleFilter} />
            <PropertyList properties={filteredProperties} onInterested={onInterested} />
        </div>
    );
};

export default BuyerDashboard;
