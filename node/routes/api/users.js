const express = require('express');
const bodyParser = require('body-parser').json();
var router = express.Router();

const userModel = require('../../test/models/user');

router.get('/org/:orgId/users/', (req, res, next) => {
  var orgId = req.params.orgId;

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

  var param = {
    postId: jobId
  };
  var out = userModel.find(param, (err, users) => {
    console.log('api/job/user: ', users);
    res.json(users);
  });
});

// save user
router.post('/user/:userId', bodyParser, (req, res, next) => {
  const param = {
    userId: req.body.userId
  };
  const out = userModel.update(param, req.body, (err, raw) => {
    if (!err) {
      res.json(raw);
    }
  });
});

module.exports = router;
