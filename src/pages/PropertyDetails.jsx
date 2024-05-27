import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './PropertyDetails.module.scss';

const PropertyDetails = ({ properties }) => {
    const { id } = useParams();
    const property = properties.find(property => property._id === id);

    if (!property) {
        return <div>Property not found</div>;
    }

    return (
        <div className={styles.propertyDetails}>
            <div
                className={styles.image}
                style={{ backgroundImage: `url(${property.imageUrl})` }}
            ></div>
            <div className={styles.details}>
                <div className={styles.title}>{property.place}</div>
                <div className={styles.info}>
                    Area: {property.area} sq. ft.<br />
                    Bedrooms: {property.bedrooms}<br />
                    Bathrooms: {property.bathrooms}<br />
                    Nearby Hospitals: {property.nearbyHospitals}<br />
                    Nearby Colleges: {property.nearbyColleges}<br />
                    Description: {property.description}
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;
