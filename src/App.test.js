// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ForgeNook title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ForgeNook/i);
    expect(titleElement).toBeInTheDocument();
});
