const express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
  next();
});

router.get('/jobs/:orgId', (req, res, next) => {
    var orgId = req.params.orgId;

    var jobModel = require('./models/job');
    var param = {orgId: orgId};
    var out = jobModel.find(param, (err, json)=>{
      res.json(json);
    });
});

module.exports = router;