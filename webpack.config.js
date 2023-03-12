const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

const baseConfig = {
    entry: {
        app: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                use: "html-loader"
            }
        ],
    },
    resolve: {
        extensions: [".js"],
    },
};

module.exports = ({}, { mode }) => {
    const isProductionMode = mode === 'production';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');
    return merge(baseConfig, envConfig);
};