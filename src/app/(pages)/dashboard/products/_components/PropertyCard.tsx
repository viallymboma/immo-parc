"use client";

import React, { useState } from 'react';

import { PropertyDataType } from './property_data';

interface PropertyCardProps {
    property: PropertyDataType;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    const toggleFavorite = () => setIsFavorited(!isFavorited);

    return (
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <div className="relative">
                <img
                    // src={ property?.pircture && property?.pircture[0] }
                    // src={ "https://photos.fife.usercontent.google.com/pw/AP1GczNn8f-e2RcJeILo1LxSGXMT2a1EOJlOw2MRlRwe1l4wnKnL-3kRagk=w802-h1080-s-no-gm?authuser=1"}
                    src={ `PhotoOne` }
                    alt={property.location}
                    className="w-full h-48 object-cover"
                />
                {/* <Image 
                    src={ "https://photos.fife.usercontent.google.com/pw/AP1GczNn8f-e2RcJeILo1LxSGXMT2a1EOJlOw2MRlRwe1l4wnKnL-3kRagk=w802-h1080-s-no-gm?authuser=1"}
                    alt={property?.location!}
                    width={100}
                    height={100}
                    className="w-full h-48 object-cover"
                /> */}
                <button
                    onClick={toggleFavorite}
                    className="absolute top-2 right-2 text-white bg-gray-900 bg-opacity-50 p-1 rounded-full"
                >
                    {isFavorited ? '❤️' : '🤍'}
                </button>
            </div>

            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">${ property?.price && property?.price.toLocaleString()}</h3>
                <p className="text-sm text-gray-500">{property.location}, {property.city}, {property.country}</p>
                <div className="text-sm mt-2">
                    <p><strong>Size:</strong> {property.size} m²</p>
                    <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
                    <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
