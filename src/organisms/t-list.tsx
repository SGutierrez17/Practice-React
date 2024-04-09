import React from 'react'

import { Paper } from '@mui/material';
import theme from '../theme/theme';

export interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}
export default function List<T>({ items, renderItem }: ListProps<T>) {
    return (
    <Paper>
    <ul style={{color: theme.palette.primary.main}}>
    <h2>Lista generica </h2>
            {items.map((item, index) => (
            <li key={index}>{renderItem(item)}</li>
        ))}
    </ul>
    </Paper>
    );
}

