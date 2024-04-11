import React, { useState } from 'react';
import { Paper, Button } from '@mui/material';

const InputRegex: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean | null>(null); 

    const regex: RegExp = /([a-zA-Z\d.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        const isValidEmail = regex.test(inputValue);
        setIsValid(isValidEmail); 

        if (isValidEmail) {
            alert('¡Email enviado satisfactoriamente!');
        }
    };

    return (
        <div>
            <Paper>
                <label>
                    Ingresa tu correo electrónico:
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </label>
                <Button  onClick={handleSubmit}>Enviar</Button>
            </Paper>
            {isValid !== null && !isValid && <p>¡La dirección de correo electrónico no es válida!</p>}
        </div>
    );
}

export default InputRegex;


