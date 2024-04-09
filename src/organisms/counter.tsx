import React from 'react'

import { Paper } from '@mui/material';

export type CounterProps = {
    name: string;
    initialCount: number; 
    buttonIncrement: string;
    buttonDecrement: string;
    backgroundColor?: string;
};

export default function Counter({
    name,
    initialCount,
    buttonIncrement,
    buttonDecrement,
    backgroundColor
    }: CounterProps) {
    const [count, setCount] = React.useState<number>(initialCount);

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        if(count>0) {
            setCount(count - 1)
        }
    }

    return (
    <div>
        <Paper sx={{width:'250px', padding:'16px', margin:'16px'}}>
        <p>{name}<span style={{paddingLeft:'10px'}}>{count}</span></p>
        <button style={{backgroundColor}} onClick={increment}>{buttonIncrement}</button>
        <button style={{backgroundColor}} onClick={decrement}>{buttonDecrement}</button>
        </Paper>
    </div>
)}

