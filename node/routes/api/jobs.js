const express = require('express');
var router = express.Router();

<<<<<<< HEAD
router.get('/org/:orgId/jobs', (req, res, next) => {
=======
router.get('/jobs/:orgId', (req, res, next) => {
>>>>>>> bbe48c3e461675372c84c00151dabb6115618b0f
    var orgId = req.params.orgId;

    var jobModel = require('../../test/models/job');
    var param = {orgId: orgId};
    var out = jobModel.find(param, (err, json)=>{
      res.json(json);
    });
});

module.exports = router;