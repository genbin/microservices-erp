const express = require('express');
var server = express();
var router = express.Router();

router.get('/user/:id', (req, res, next) => {
    next();
});

router.get('/user/:id', (req, res) => {
    res.render('user/login.pug', {
        pageTitle: '登录页面'
    });
});

module.exports = router;