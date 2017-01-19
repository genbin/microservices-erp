var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  'key': Number,
  'userId': String,
  'orgId': String,
  'postId': String,
  'leaderId': String,
  'realName': String,
  'loginName': String,
  'mobile': String,
  'email': String,
  'remark': String,
  'sort': Number,
  'status': String
});

var userModel = mongoose.model('user', userSchema); 

module.exports = userModel;
