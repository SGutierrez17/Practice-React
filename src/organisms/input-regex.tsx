import React, { useState } from 'react';
import { Paper } from '@mui/material';

const InputRegex: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean | null>(null); 

    const regex: RegExp = /([a-zA-Z\d.-_]+)@([a-z\d-]+)\.([a-z]{2,})(\.[a-z]{2,8})?$/;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        const isValidEmail = regex.test(inputValue);
        setIsValid(isValidEmail); 

        if (isValidEmail) {
            alert('¡Email enviado satisfactoriamente!');
        }
        else 
            alert('¡Ingrese una direccion de email valida!')
    };

    return (
            <Paper>
                <form onSubmit={handleSubmit}>
                    <label>
                        Ingresa tu correo electrónico:
                        <input type='email' value={inputValue} onChange={handleInputChange}/>
                    </label>
                    <button type='submit'>Enviar</button>
                    {isValid && <div>{isValid}</div>}
                </form>
            </Paper>
    );
}

export default InputRegex;


