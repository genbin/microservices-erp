const PORT = process.env.npm_package_config_port;
const express = require('express');
const server = express();

const favicon = require('serve-favicon');
const path = require('path');
server.use(favicon(__dirname + '/static/img/favicon.png'));

server.set('views', path.join(__dirname, '/views'));
server.set('view engine', 'pug');

// 定义数据解析器
const bodyParser = require('body-parser');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// 定义cookie解析器
const cookieParser = require('cookie-parser');
server.use(cookieParser());

// 定义静态文件目录
server.use(express.static(path.join(__dirname, '/static/')));

if (process.env.NODE_ENV === 'production') {
    console.log('生产环境');
} else {
    console.log('开发环境');
}

module.exports = {
    PORT: PORT
}