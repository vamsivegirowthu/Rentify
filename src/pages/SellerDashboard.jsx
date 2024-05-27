import React from 'react';
import PropertyList from '../components/PropertyList';
import styles from './SellerDashboard.module.scss';

const SellerDashboard = ({ properties, onDelete, onUpdate }) => {
    return (
        <div className={styles.sellerDashboard}>
            <h1 className={styles.header}>My Properties</h1>
            <PropertyList properties={properties} onDelete={onDelete} onUpdate={onUpdate} />
        </div>
    );
};

export default SellerDashboard;
