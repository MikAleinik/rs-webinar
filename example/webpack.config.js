const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

const baseConfig = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            chunks: ['index'],
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        splitChunks: {
            name: 'common',
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/i,
                use: 'html-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
};

module.exports = ({}, { mode }) => {
    const isProductionMode = mode === 'production';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};
