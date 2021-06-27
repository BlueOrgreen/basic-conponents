const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template/index.html'
        })
    ],
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        port: 3000,
        open: true,
    }
}