const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

const baseConfig = {
    entry: {
        slider: './src/pages/slider/slider.js',
        pagination: './src/pages/pagination/pagination.js',
    },
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/pages/slider/slider.html',
            filename: 'slider.html',
            chunks: ['common', 'slider']
        }),
        new HtmlWebpackPlugin({
            template: 'src/pages/pagination/pagination.html',
            filename: 'pagination.html',
            chunks: ['common', 'pagination']
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets"),
                    to: path.resolve(__dirname, "dist", "assets")
                },
            ]
        }),
        new CleanWebpackPlugin(),
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

module.exports = ({ }, { mode }) => {
    const isProductionMode = mode === 'production';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};