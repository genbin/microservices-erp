var mongoose = require('mongoose');
var jobSchema = new mongoose.Schema({
  'key': Number,
  'orgId': String,
  'postId': Number,
  'leaderId': String,
  'postName': String,
  'type': String,
  'sort': Number
});

var jobModel = mongoose.model('job', jobSchema); 

module.exports = jobModel;
