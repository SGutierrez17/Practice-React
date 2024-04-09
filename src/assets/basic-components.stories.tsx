import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import BasicComponents from '../organisms/basic-components';

export default {
    title: 'BasicComponents',
    component: BasicComponents,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    }
} as Meta <typeof BasicComponents>;

export const Primary : StoryObj<typeof BasicComponents> = {
    args : {
        basic: ['Interface', 'Type', 'Functions', 'Classes']
    }
}