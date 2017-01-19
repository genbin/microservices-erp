const express = require('express');
var server = express();
var router = express.Router();

router.get('/', (req, res) => {
    res.render('workflow/index.pug', {});
});

module.exports = router;