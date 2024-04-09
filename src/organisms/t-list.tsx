import React from 'react'

import { Paper } from '@mui/material';

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}
export default function List<T>({ items, renderItem }: ListProps<T>) {
    return (
    <Paper sx={{width:'180px', padding:'16px', margin:'16px'}}>
    <ul>
    <h2>Lista generica </h2>
            {items.map((item, index) => (
            <li key={index}>{renderItem(item)}</li>
        ))}
    </ul>
    </Paper>
    );
}

