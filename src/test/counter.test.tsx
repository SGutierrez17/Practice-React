import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../organisms/counter';

test('renders with initial count and buttons', () => {
    render(<Counter name='Counter' initialCount={0} buttonIncrement='increment' buttonDecrement='decrement'/>);
    const countElement = screen.getByText(/Counter/i);
    expect(countElement).toBeInTheDocument();
});
test('increments count when button is clicked', async() => {
    render(<Counter name='Counter' initialCount={0} buttonIncrement='increment' buttonDecrement='decrement'/>);
    const buttonIncrement = screen.getByText('increment');
    await userEvent.click(buttonIncrement);
    expect(screen.getByText('1')).toBeInTheDocument();
});
test('decrements count when button is clicked', async() => {
    render(<Counter name='Counter' initialCount={0} buttonIncrement='increment' buttonDecrement='decrement'/>);
    const buttonIncrement = screen.getByText('increment');
    const buttonDecrement = screen.getByText('decrement');
    await userEvent.click(buttonIncrement);
    await userEvent.click(buttonDecrement);
    expect(screen.getByText('0')).toBeInTheDocument();
});