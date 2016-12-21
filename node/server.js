const express = require('express');
var server = express();
var router = express.Router();

router.get('/user/:id', (req, res, next) => {
    console.log('SEND');
    next();
});

router.get('/user/:id', (req, res, next) => {
    console.log('although this matches');
    next();
});

router.get('/user/:id', (req, res) => {
    console.log('and this matches too');
    res.end();
});

server.get('/user/:id', router);

module.exports = server;