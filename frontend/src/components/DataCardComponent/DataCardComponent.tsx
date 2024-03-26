import React from 'react';
import './DataCardComponent.css';

const DataCardComponent = ({ data }: { data: any }) => {
    const dataKeys = Object.keys(data);

    return (
        <div className="data-card">
            {dataKeys.map(key => (
                <p key={key}>{key}: {data[key]}</p>
            ))}
        </div>
    );
};

export default DataCardComponent;
