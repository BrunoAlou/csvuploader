import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FileUploadComponent from '../components/FileUploadComponent/FileUploadComponent';

describe('FileUploadComponent', () => {
    it('renders the file input', () => {
        render(<FileUploadComponent onFileUpload={jest.fn()} onClearData={jest.fn()} />);
        expect(screen.getByLabelText(/choose file.../i)).toBeInTheDocument();
    });

    it('calls onFileUpload when a file is selected', () => {
        const handleFileUpload = jest.fn();
        render(<FileUploadComponent onFileUpload={handleFileUpload} onClearData={jest.fn()} />);

        const fileInput = screen.getByLabelText(/choose file.../i);
        const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
        fireEvent.change(fileInput, { target: { files: [file] } });

        expect(handleFileUpload).toHaveBeenCalledWith(file);
    });
});
