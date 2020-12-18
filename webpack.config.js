const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        contentBase: './dist',
        // hot: true,
        // host: 'localhost',
        // port: 8000,
        // historyApiFallback:{
        //     disableDotRule: true
        // },
        // overlay: true,
        // inline: true,
        // stats:"errors-only",
        // proxy:{
        //     '/api/':{
        //         changeOrigin:true,
        //         target:'http://localhost:8000',
        //         pathRewrite: {
        //             '^/api/':'/'
        //         }
        //     }
        // },
    },
};


