import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Counter from '../organisms/counter';

import '../styles/styles.scss';

export default {
    title: 'Counter',
    component: Counter,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    }
} as Meta <typeof Counter>;

export const Primary : StoryObj<typeof Counter> = {
    args : {
        name: 'Counter',
        initialCount: 0,
        buttonIncrement: 'Increment',
        buttonDecrement: 'Decrement',
    }
}






