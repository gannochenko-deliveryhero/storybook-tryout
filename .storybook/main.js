const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    stories: ['../content/**/*.story.(mdx|md)'],
    addons: [
        // '@storybook/addon-knobs/register',
        // '@storybook/addon-actions',
        '@storybook/addon-links',
        'storybook-addon-styled-component-theme/dist/register',
        // '@storybook/addon-viewport/register',
        '@storybook/addon-docs',
    ],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                },
                {
                    loader: require.resolve('react-docgen-typescript-loader'),
                },
            ],
        });
        config.resolve.extensions.push('.ts', '.tsx');
        config.resolve.plugins = [new TsconfigPathsPlugin({})];
        return config;
    },
};
