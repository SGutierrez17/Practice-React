import React from 'react'

import { Paper } from '@mui/material';

export default function Counter() {
    const [count, setCount] = React.useState<number>(0);

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
        <Paper sx={{width:'180px', padding:'16px', margin:'16px'}}>
        <p>Counter <span>{count}</span></p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </Paper>
    </div>
)}

