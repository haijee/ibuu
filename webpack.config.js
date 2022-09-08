const HtmlWebpackPlugin = require('html-webpack-plugin')
const BannerWebpackPlugin = require('./plugins/test')
const { resolve } = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, './dist'),
        filename: 'js/[name].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: './loaders/test',
                options: {
                    author: 'haijee',
                    email: 'haijee@qq.com'
                }
            },
        ]
    },
    plugins: [
        new BannerWebpackPlugin({}),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ]
}
