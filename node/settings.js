const PORT = process.env.npm_package_config_port;
var express = require('express');
var server = express();
var path = require('path');

// 配置网站图标
var favicon = require('serve-favicon');
server.use(favicon(path.join(__dirname + '/static/img/favicon.png')));

// 配置页面模版引擎
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');

// 配置Mongo数据库
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const MONGODB_HOST = 'mongodb://127.0.0.1/xyre_demo';
mongoose.connect(MONGODB_HOST);
// 监测异常
var db = mongoose.connection
db.on('error', console.error.bind(console,'连接错误:'))
db.once('open',function(){
  console.log('MongoDB was opend!')
})
db.once('close',function(){
  console.log('MongoDB was closed!')
})

// 定义数据解析器
const bodyParser = require('body-parser');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: false
}));

// 定义cookie解析器
const cookieParser = require('cookie-parser');
server.use(cookieParser());

module.exports = {
  PORT: PORT
};
