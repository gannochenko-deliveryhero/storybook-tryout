import React from 'react';
import {
    withKnobs,
    text,
    boolean,
    number,
    select,
    // eslint-disable-next-line import/no-unresolved
} from '@storybook/addon-knobs';
// eslint-disable-next-line import/no-unresolved
import { action } from '@storybook/addon-actions';
import { Message } from '@deliveryhero/armor';

export default {
    title: 'Components/Message',
    component: Message,
    decorators: [withKnobs],
    parameters: {},
};

// const optionsTag = {
//     Button: 'button',
//     A: 'a',
//     Span: 'span',
//     Div: 'div',
// };
//
// const optionsType = {
//     Primary: 'primary',
//     Secondary: 'secondary',
//     Tertiary: 'tertiary',
//     Danger: 'danger',
// };
//
// const getTypeAttributes = (type: string) => ({
//     primary: false,
//     secondary: false,
//     tertiary: false,
//     [type]: true,
// });

export const Generic = () => (
    <Message success>
        Hooray!
    </Message>
);
