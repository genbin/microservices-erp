const express = require('express');
var server = express();
var router = express.Router();

router.get('/user/:id', (req, res, next) => {
    console.log('SEND');
    next();
});

router.get('/user/:id', (req, res, next) => {
    console.log('although this matches: ', req.id);
    next();
});

router.get('/user/:id', (req, res) => {
    console.log('and this matches too');
    res.end();
});

server.get('/user/:id', router);

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

module.exports = server;