const path = require('path');
const fs = require('fs');
const webpackConfig = {
    entry: (path.resolve(__dirname, './components/index.jsx')),
    output: {
        path: path.resolve(__dirname, './dist/'),
        publicPath: 'http://127.0.0.1:4337/static/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { 
                test: /\.jsx$/,
                loader: 'babel-loader',     
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {test: /\.css$/, loader: "style!css"},
            {test: /\.scss$/,loader: 'style!css!sass'}
        ]
    },
    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.jsx', '.json', '.react.js', '.scss']
    }
}

console.log('webpack.config.js: %o', webpackConfig);

module.exports = webpackConfig;