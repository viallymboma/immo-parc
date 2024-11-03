import React from 'react';

import {
  propertyData,
  PropertyDataType,
} from './property_data';
import PropertyCard from './PropertyCard';

const PropertiesModule = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {propertyData.map((property: PropertyDataType, index: number) => (
                <PropertyCard key={`${property?.id} - ${ index }`} property={property} />
            ))}
        </div>
    );
}

export default PropertiesModule