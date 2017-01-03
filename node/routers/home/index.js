const express = require('express');
var server = express();
var router = express.Router();

router.get('/', (req, res) => {
    res.render('base.pug', {
        pageTitle: '登录页面'
    });
});

module.exports = router;