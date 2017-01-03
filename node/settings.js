const PORT = process.env.npm_package_config_port;
var express = require('express');
var server = express();
var path = require('path');

// 配置网站图标
var favicon = require('serve-favicon');
server.use(favicon(path.join(__dirname + '/public/img/favicon.png')));

// 配置页面模版引擎
var path = require('path');
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');

// 定义数据解析器
const bodyParser = require('body-parser');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// 定义cookie解析器
const cookieParser = require('cookie-parser');
server.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
    console.log('生产环境');
} else {
    console.log('开发环境');
}

module.exports = {
    PORT: PORT
}