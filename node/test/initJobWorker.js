/**
 * 生成随机数据，并初始化本地测试Mongo库
 * @type {[type]}
 */

// 链接Mongo
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/xyre_demo');
const fs = require('fs');

const INIT_DB = false;
// 监测异常
var db = mongoose.connection
db.on('error', console.error.bind(console, '连接错误:'))
db.once('open', function() {
  console.log('MongoDB was opend!')
});
db.once('close', function() {
  console.log('MongoDB was closed!')
});

// 准备mock模版
const Mock = require('mockjs');
var Random = Mock.Random;

importJobFile();
importWorkerFile();

function importJobFile () {
  var jobModel = require('../routers/api/models/job');
  let jobQ = jobModel.remove({});
  jobQ.exec();

  let data = fs.readFile('./job.json', function(err, data){
    jobModel.create(JSON.parse(data.toString()), function(err) {
      console.log('initial jobModel is OK');
    });
  });
}

function importWorkerFile () {
  var workerModel = require('../routers/api/models/worker');
  let workerQ = workerModel.remove({});
  workerQ.exec();

  let data = fs.readFile('./worker.json', function(err, data){
    workerModel.create(JSON.parse(data.toString()), function(err) {
      console.log('initial workerModel is OK');
    });
  });
}
