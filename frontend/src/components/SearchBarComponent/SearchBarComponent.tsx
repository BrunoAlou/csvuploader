import React from 'react';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons'; // Só se você instalou react-bootstrap-icons

type SearchBarProps = {
    onSearch: (query: string) => void;
};

const SearchBarComponent: React.FC<SearchBarProps> = ({ onSearch }) => {
    return (
        <Form.Group className='mt-3'>
            <Form.Label>Search in the loaded file:</Form.Label>
            <InputGroup>
                <FormControl
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => onSearch(e.target.value)}
                />
                <Button variant="outline-secondary">
                    <Search />
                </Button>
            </InputGroup>
        </Form.Group>
    );
};

export default SearchBarComponent;
