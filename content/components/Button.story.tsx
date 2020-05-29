import React from 'react';
import {
    withKnobs,
    text,
    boolean,
    number,
    select,
    // eslint-disable-next-line import/no-unresolved
} from '@storybook/addon-knobs';
// @ts-ignore
import { withInfo } from '@storybook/addon-info';
// eslint-disable-next-line import/no-unresolved
import { action } from '@storybook/addon-actions';
import { Button, MaterialIcon } from '@deliveryhero/armor';

export default {
    title: 'Components/Button',
    component: Button,
    decorators: [withInfo, withKnobs],
    parameters: {
        info: {},
    },
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
    <Button primary>
        <MaterialIcon marginRight={2} icon="delete" />
        Button text
    </Button>
);
