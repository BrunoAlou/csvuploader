// DataCardComponent.tsx

import React from 'react';
import './DataCardComponent.css'; 

const DataCardComponent = ({ data }: { data: any }) => {
    return (
        <div className="data-card">
            <h2>{data.name}</h2>
            <p>City: {data.city}</p>
            <p>Country: {data.country}</p>
            <p>Favorite Sport: {data.favorite_sport}</p>
        </div>
    );
};

export default DataCardComponent;
