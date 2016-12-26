const express = require('express');
const server = express();

var router = express.Router();
var login = require('./routers/user/login');

router.get('/user/:id', (req, res, next) => {
    console.log('SEND');
    next();
});

router.get('/user/:id', (req, res, next) => {
    console.log('although this matches: ', req.params.id);
    next();
});

router.get('/user/:id', (req, res) => {
    console.log('and this matches too');
    console.timeEnd('server running time');
    res.end();
});

server.get('/user/:id', router);
server.get('/users/:id', login);

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

module.exports = server;