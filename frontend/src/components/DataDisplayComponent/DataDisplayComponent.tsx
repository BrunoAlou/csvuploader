// DataDisplayComponent.tsx

import React from 'react';
import DataCardComponent from '../DataCardComponent/DataCardComponent';
import './DataDisplayComponent.css'; // Novos estilos

const DataDisplayComponent = ({ data }: { data: any[] }) => {
    if (!Array.isArray(data)) {
        return <div>No data available</div>;
    }
    return (
        <div className="data-display">
            {data.map((row, index) => (
                <DataCardComponent key={index} data={row} />
            ))}
        </div>
    );
};

export default DataDisplayComponent;
