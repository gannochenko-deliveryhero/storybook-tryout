import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import { defaultTheme } from '@deliveryhero/armor';

const themes = [
    {
        name: 'Default',
        backgroundColor: '#fff',
        ...defaultTheme,
    },
];

addDecorator(withThemesProvider(themes));

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});
