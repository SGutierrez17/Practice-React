// Practice typescript

import React from 'react'

import { Paper } from '@mui/material';
import theme from '../theme/theme';

export interface typescriptBasic{
    basic: string[];
}
    
    const BasicComponents: React.FC<typescriptBasic> = ({ basic }) => {
        return (
            <div>
                <Paper style={{color: theme.palette.secondary.main}}>
                <h2>Typescript Basics</h2>
                <ul >
                    {basic.map((basic, index) => (
                    <li key={index}>{basic}</li>
                    ))}
                </ul>
                </Paper>
            </div>
        );
    };

    export default BasicComponents;


    






