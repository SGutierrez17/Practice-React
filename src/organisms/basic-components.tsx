// Practice typescript

import React from 'react'

import { Paper } from '@mui/material';

export interface typescriptBasic{
    basic: string[];
}
    
    const BasicComponents: React.FC<typescriptBasic> = ({ basic }) => {
        return (
            <div>
                <Paper sx={{width:'180px', padding:'20px', m:'12px'}}>
                <h2>Typescript Basics</h2>
                <ul>
                    {basic.map((basic, index) => (
                    <li key={index}>{basic}</li>
                    ))}
                </ul>
                </Paper>
            </div>
        );
    };

    export default BasicComponents;


    






