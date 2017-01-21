const express = require('express');
var server = express();
var router = express.Router();

router.get('/', (req, res) => {
    res.render('edward/index.pug', {
        pageTitle: 'edward'
    });
});

module.exports = router;
