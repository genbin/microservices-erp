const express = require('express');
var server = express();
var router = express.Router();

router.get('/user/:id', (req, res, next) => {
    console.log('router user');
    next();
});

router.get('/user/:id', (req, res) => {
    console.log('and user matches too');
    res.render('base.pug', {
        pageTitle: '登录页面'
    });
});

module.exports = router;