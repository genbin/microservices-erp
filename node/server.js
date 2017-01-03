const express = require('express');
var server = express();
var path = require('path');

var favicon = require('serve-favicon');
server.use(favicon(path.join(__dirname + '/public/img/favicon.png')));

// 加载静态文件路由
server.use('/static', express.static(path.join(__dirname + '/public')));

// 业务逻辑路由
var index = require('./routers/home/index');
server.get('/', index);

var login = require('./routers/user/login');
server.get('/user/:id', login);

// 错误处理
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

module.exports = server;