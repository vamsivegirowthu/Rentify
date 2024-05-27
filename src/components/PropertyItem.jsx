import React from 'react';
import styles from './PropertyItem.module.scss';

const PropertyItem = ({ property, onInterested }) => {
    return (
        <div className={styles.propertyItem}>
            <div
                className={styles.propertyImage}
                style={{ backgroundImage: `url(${property.imageUrl})` }}
            ></div>
            <div className={styles.propertyDetails}>
                <div className={styles.propertyTitle}>{property.place}</div>
                <div className={styles.propertyInfo}>
                    Area: {property.area} sq. ft.<br />
                    Bedrooms: {property.bedrooms}<br />
                    Bathrooms: {property.bathrooms}<br />
                    Nearby Hospitals: {property.nearbyHospitals}<br />
                    Nearby Colleges: {property.nearbyColleges}
                </div>
                <button
                    className={styles.interestedButton}
                    onClick={() => onInterested(property._id)}
                >
                    I'm Interested
                </button>
            </div>
        </div>
    );
};

export default PropertyItem;
