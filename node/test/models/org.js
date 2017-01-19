var mongoose = require('mongoose');
var orgSchema = new mongoose.Schema({
  'text': String,
  'org': [
    {
      'text': String,
      'org': [
      {
        'text': String,
        'org': [
        {
          'text': String,
          'org': [
          {
            'orgId': String,
            'text': String,
          }],
        }],
      }],
    }]
});

var orgModel = mongoose.model('org', orgSchema); 

module.exports = orgModel;
