const express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
  next();
});

router.get('/orgs', (req, res, next) => {
    var orgModel = require('./models/org');
    var out = orgModel.find((err, tree)=>{
      res.json(tree);
    });
});

module.exports = router;