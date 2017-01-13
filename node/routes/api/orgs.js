const express = require('express');
var router = express.Router();

router.get('/orgs', (req, res, next) => {
    var orgModel = require('../../test/models/org');
    var out = orgModel.find((err, tree)=>{
      res.json(tree);
    });
});

module.exports = router;