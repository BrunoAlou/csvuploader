import React from 'react';

const SearchBarComponent = ({ onSearch }: { onSearch: (query: string) => void }) => {
    return (
        <div className='mt-5'>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
};

export default SearchBarComponent;
