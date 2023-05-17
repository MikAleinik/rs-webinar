const path = require('path');

module.exports = {
    mode: 'development',
    target: 'web',
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        host: 'localhost',
        port: 4200,
        hot: true,
        static: path.resolve(__dirname, './dist'),
        historyApiFallback: true,
    },
};
