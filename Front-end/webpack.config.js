const path = require('path'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    miniCss = require('mini-css-extract-plugin');




module.exports = {
    entry: [
        './js/app.js'
    ],

    output: {
        filename: 'bundle.[chunkhash].js',
    },

    devServer: {
        port: 9999,
        open: true
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        
        new miniCss({
            filename: 'style.css',
        }),
    ],

    module: {
        rules: [{
            test:/\.(s*)css$/,
            use: ['style-loader', 'css-loader']
        },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
}