import { render, screen } from '@testing-library/react';
import PersonIdentity from '../organisms/person-identity';

test('renders name in the document', () => {
render(<PersonIdentity name="Sergio" age={27} hobbies={['futbol', 'billar', 'comer']}/>);
    const name = screen.getByText(/sergio/i);
    expect(name).toBeInTheDocument();
});

test('renders age in the document', () => {
    render(<PersonIdentity name="Sergio" age={27} hobbies={['futbol', 'billar', 'comer']}/>);
        const age = screen.getByText(27);
        expect(age).toBeInTheDocument();
    });

test('renders person identity with correct items', () => {
    const hobbies = ['futbol', 'billar', 'comer'];
    render(<PersonIdentity name="Sergio" age={27} hobbies={['futbol', 'billar', 'comer']}/>);
    hobbies.forEach(item => {
        const listItemElement = screen.getByText(item);
        expect(listItemElement).toBeInTheDocument();
    });
});