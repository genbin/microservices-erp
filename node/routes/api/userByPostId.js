const express = require('express');
var router = express.Router();

router.get('/userByPostId/:postId', (req, res, next) => {
    var postId = req.params.postId;

    var userModel = require('../../test/models/user');
    var param = {postId: postId};
    var out = userModel.find(param, (err, json)=>{
      res.json(json);
    });
});

module.exports = router;