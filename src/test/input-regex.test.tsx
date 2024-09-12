import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputRegex from '../organisms/input-regex';

test('renders title in the document', () => {
render(<InputRegex />);
    const title = screen.getByText('Ingresa tu correo electrónico:');
    expect(title).toBeInTheDocument();
});

test('renders button text in the document', () => {
    render(<InputRegex />);
        const sendButton = screen.getByText('Enviar');
        expect(sendButton).toBeInTheDocument();
});

test('shows success message for valid email', async() => {
    render(<InputRegex />);
    const input = screen.getByText('Ingresa tu correo electrónico:');
    await userEvent.type(input, 'sergio@gmail.com');
    const sendButton = screen.getByText('Enviar');
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    await userEvent.click(sendButton);
    expect(alertSpy).toHaveBeenCalledWith('¡Email enviado satisfactoriamente!');
    alertSpy.mockRestore();
});

test('shows error message when clicking send without entering email', async() => {
    render(<InputRegex />);
    const sendButton = screen.getByText('Enviar');
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    await userEvent.click(sendButton);
    expect(alertSpy).toHaveBeenCalledWith('¡Ingrese una direccion de email valida!');
    alertSpy.mockRestore();
});
