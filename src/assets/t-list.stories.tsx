import type { Meta, StoryObj } from '@storybook/react';

import List from '../organisms/t-list';

export default {
    title: 'List',
    component: List,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    }
} as Meta <typeof List>;

export const Primary: StoryObj<typeof List> ={
    args:{
        items: ['One', 'Two', 'Three'],
        renderItem: (item: unknown) => {
            const content = typeof item === 'string' ? item : 'Invalid type';
            return <span>{content}</span>; 
        }
    }
}