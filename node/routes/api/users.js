const express = require('express');
var router = express.Router();

<<<<<<< HEAD
router.get('/org/:orgId/users/', (req, res, next) => {
  var orgId = req.params.orgId;

  var userModel = require('../../test/models/user');
  var param = {
    orgId: orgId
  };
  var out = userModel.find(param, (err, users) => {

    // node下处理route的demo
    let usersIdx = [];
    users.map((user) => {
      return usersIdx.push(user);
    });
    res.json(usersIdx);
    
  });
});

router.get('/job/:jobId/users/', (req, res, next) => {
  var jobId = req.params.jobId;

  var userModel = require('../../test/models/user');
  var param = {
    postId: jobId
  };
  var out = userModel.find(param, (err, users) => {
    console.log('api/job/user: ', users);
    res.json(users);
  });
=======
router.get('/users/:orgId', (req, res, next) => {
    var orgId = req.params.orgId;

    var userModel = require('../../test/models/user');
    var param = {orgId: orgId};
    var out = userModel.find(param, (err, json)=>{
      res.json(json);
    });
>>>>>>> bbe48c3e461675372c84c00151dabb6115618b0f
});

module.exports = router;