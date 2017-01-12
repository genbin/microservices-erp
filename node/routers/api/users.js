const express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
  next();
});

router.get('/users/:orgId', (req, res, next) => {
    var orgId = req.params.orgId;

    var userModel = require('./models/user');
    var param = {orgId: orgId};
    var out = userModel.find(param, (err, json)=>{
      res.json(json);
    });
});

module.exports = router;