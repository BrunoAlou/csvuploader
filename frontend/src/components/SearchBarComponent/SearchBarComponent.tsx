import React, { useState } from 'react';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

type SearchBarProps = {
    onSearch: (query: string) => void;
};

const SearchBarComponent: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearchClick = () => {
        onSearch(query);
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            handleSearchClick();
        }
    };

    return (
        <Form.Group className='mt-3'>
            <Form.Label>Search in the loaded file:</Form.Label>
            <InputGroup>
                <FormControl
                    type="text"
                    placeholder="Search..."
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <Button variant="outline-secondary" onClick={handleSearchClick}>
                    <Search />
                </Button>
            </InputGroup>
        </Form.Group>
    );
};

export default SearchBarComponent;
