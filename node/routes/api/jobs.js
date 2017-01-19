const express = require('express');
var router = express.Router();

router.get('/org/:orgId/jobs', (req, res, next) => {
    var orgId = req.params.orgId;

    var jobModel = require('../../test/models/job');
    var param = {orgId: orgId};
    var out = jobModel.find(param, (err, json)=>{
      res.json(json);
    });
});

module.exports = router;