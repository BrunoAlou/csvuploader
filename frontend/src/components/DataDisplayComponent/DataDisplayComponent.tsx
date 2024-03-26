import React, { useState } from 'react';
import './DataDisplayComponent.css';

const ITEMS_PER_PAGE = 5;

interface DataItem {
    [key: string]: any;
}

const DataDisplayComponent = ({ data }: { data: DataItem[] }) => {
    const headers = data.length > 0 ? Object.keys(data[0]) : [];
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const itemsToDisplay = data.slice(startIndex, endIndex);

    const goToNextPage = () => setCurrentPage((page) => Math.min(page + 1, totalPages));
    const goToPrevPage = () => setCurrentPage((page) => Math.max(page - 1, 1));

    if (!Array.isArray(data) || data.length === 0) {
        return <div className="data-display-no-data">No data available</div>;
    }

    return (
        <div className="data-display-container">
            <table className="data-display-table">
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {itemsToDisplay.map((item, rowIndex) => (
                        <tr key={rowIndex}>
                            {headers.map((header, columnIndex) => (
                                <td key={`${rowIndex}-${columnIndex}`}>{item[header]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="data-display-pagination">
                <button onClick={goToPrevPage} disabled={currentPage === 1}>
                    Prev
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default DataDisplayComponent;
