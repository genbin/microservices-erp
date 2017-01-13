const express = require('express');
var server = express();
var router = express.Router();

router.get('/', (req, res) => {
    res.render('organization/index.pug', {
        pageTitle: '组织管理'
    });
});

module.exports = router;