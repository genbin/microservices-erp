const express = require('express');
const debug = require('debug');
var server = express();
var path = require('path');

// 网站图标
var favicon = require('serve-favicon');
server.use(favicon(path.join(__dirname + '/static/img/favicon.png')));

// 加载静态文件路由
server.use('/static', express.static(path.join(__dirname + '/static')));
server.use('/lib', express.static(path.join(__dirname + '/lib')));

// 加载api逻辑路由
server.all(require('./core/routes_loader').apiRouters(server));

// 加载page路由
server.all(require('./core/routes_loader').pageRouters(server));

var login = require('./routes/user/login');
server.get('/user/:id', login);

// 初始化数据, 适合4.x版本，升级7.3.0后实效
// if (process.env.NODE_ENV === 'production') {
//   console.info('=================生产环境===============');
// } else {
//   console.info('=================开发环境===============');
// }

// 错误处理
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

module.exports = server;
