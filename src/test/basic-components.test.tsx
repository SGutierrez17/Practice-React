import React from 'react';
import { render, screen } from '@testing-library/react';
import BasicComponents from '../organisms/basic-components';

test('renders title in the document', () => {
    render(<BasicComponents basic={['Interface', 'Type', 'Functions', 'Classes']}/>);
    const title = screen.getByText(/typescript basics/i);
    expect(title).toBeInTheDocument();
});


test('renders basic components with correct items', () => {
    const basic = ['Interface', 'Type', 'Functions', 'Classes'];
    render(<BasicComponents basic={basic} />);
    basic.forEach(item => {
        const listItemElement = screen.getByText(item);
        expect(listItemElement).toBeInTheDocument();
    });
});