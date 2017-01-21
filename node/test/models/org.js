var mongoose = require('mongoose');
var orgSchema = new mongoose.Schema({
  'key': String,
  'orgId': String,
  'children': [
    {
      'orgId': String,
      'key': String,
      'children': [
      {
        'orgId': String,
        'key': String,
        'children': [
        {
          'orgId': String,
          'key': String,
          'children': [
          {
            'orgId': String,
            'key': String,
          }],
        }],
      }],
    }]
});

var orgModel = mongoose.model('org', orgSchema);

module.exports = orgModel;
