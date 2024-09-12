import { Meta, StoryObj } from '@storybook/react';
import PersonIdentity from '../organisms/person-identity';

export default {
    title: 'personIdentity',
    component: PersonIdentity,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    }
} as Meta <typeof PersonIdentity>;

export const Primary : StoryObj<typeof PersonIdentity> = {
    args : {
    name: 'Sergio',
    age: 27,
    hobbies: ['futbol', 'billar', 'comer']
    }
}