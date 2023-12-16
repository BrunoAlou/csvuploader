import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main application', () => {
    render(<App />);
    const linkElement = screen.getByText(/CSV Data Viewer/i);
    expect(linkElement).toBeInTheDocument();
});
