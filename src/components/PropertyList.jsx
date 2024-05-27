import React from 'react';
import PropertyItem from './PropertyItem';
import styles from './PropertyList.module.scss';

const PropertyList = ({ properties, onInterested }) => {
    return (
        <div className={styles.propertyList}>
            {properties.map(property => (
                <PropertyItem
                    key={property._id}
                    property={property}
                    onInterested={onInterested}
                />
            ))}
        </div>
    );
};

export default PropertyList;
