// DataDisplayComponent.tsx

import React, { useState } from 'react';
import DataCardComponent from '../DataCardComponent/DataCardComponent';
import './DataDisplayComponent.css';

const ITEMS_PER_PAGE = 10; // Você pode ajustar este valor conforme necessário

const DataDisplayComponent = ({ data }: { data: any[] }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const itemsToDisplay = data.slice(startIndex, endIndex);

    const goToNextPage = () => setCurrentPage(page => Math.min(page + 1, totalPages));
    const goToPrevPage = () => setCurrentPage(page => Math.max(page - 1, 1));

    if (!Array.isArray(data) || data.length === 0) {
        return <div>No data available</div>;
    }
    
    return (
        <div>
            <div className="data-display">
                {itemsToDisplay.map((row, index) => (
                    <DataCardComponent key={index} data={row} />
                ))}
            </div>
            <div className="pagination">
                <button onClick={goToPrevPage} disabled={currentPage === 1}>Prev</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default DataDisplayComponent;
