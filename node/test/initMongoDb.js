/**
 * 生成随机数据，并初始化本地测试Mongo库
 * @type {[type]}
 */

// 链接Mongo
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/xyre_demo');
const fs = require('fs');

const INIT_DB = true;

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
// 增加组织中公司的数据
var orgTmpl = Mock.mock([
  {
    'key': '鑫苑中国总部',
    'orgId': '@natural',
    'children|2-3': [{
      'orgId': '@natural',
      'key': /集团公司[a-z][0-9]/,
      'children|2-3': [{
        'orgId': '@natural',
        'key': /管理部[a-z][0-9]/,
        'children|2-3': [{
          'orgId': '@natural',
          'key': /设计职能[a-z][0-9]/,
          'children|2-3': [{
            'orgId': '@natural',
            'key': /分公司[a-z][0-9]/,
          }]
        }]
      }]
    }]
  }
]);

var jobTmpl = {
  'key|+1': 1,
  'leaderId|+1': 1,
  'orgId': '',
  'postId|+2': 1,
  'postName': /岗位名称[a-z]{3,}/,
  'type': 'PRIMARY',
  'sort|+1': 1
};

const userTmpl = {
  'key|+1': 1,
  'userId': '@increment',
  'orgId': '',
  'postId': '',
  'leaderId': '',
  'realName': /真实名字[a-z]{5,}/,
  'loginName': /登录名字[a-z]{5,}/,
  'mobile': /[1-9]{13}/,
  'email': '@email',
  'remark': '@sentence',
  'sort|+1': 1,
  'status': '启用'
};

var jobModel = require('./models/org.js');

// 保存入库
if (INIT_DB) {
  let hrTreeQ = jobModel.remove({});
  hrTreeQ.exec();

  jobModel.create(orgTmpl, function(err) {
    if (err) {
      console.error('create db is error: ', err);
    } else {
      console.log('tree结构已入库，正在生成其他的模拟数据...');
      generateOtherData();
    }
  });
}


// 生成相关的用户和岗位
function generateOtherData () {
  var jobData = [];
  var userData = [];

  let hrTreeQ = jobModel.find({});
  hrTreeQ.exec(function(err, hr) {
    if (err) {
      console.log('err: ', err);
    }
    hr.map(subRoot => {
      //
      subRoot.children.map((one) => {
        console.log('根节点： ', one.key);

        one.children.map((two) => {
          console.log('第二层节点： ', two.key);

          two.children.map((three) => {
            console.log('  > 第三层节点： ', two.key);

            three.children.map((four) => {
              console.log(
                '  > 叶节点: {_id : "%s", key: "%s", orgId: "%s"}',
                four._id, four.key, four.orgId
              );

              // 根据点击后的部门生成相关的岗位
              for (let i=0; i<10; i++) {
                let jobDatum = Mock.mock(jobTmpl);
                jobDatum.orgId = four.orgId + '';
                jobData.push(jobDatum);
                console.log('     > job.orgId: %s, job.postName: %s ', jobDatum.orgId, jobDatum.postName);

                // 根据点击后的部门生成相关的人员
                for (let i=0; i<10; i++) {
                  let userDatum = Mock.mock(userTmpl);
                  userDatum.jobId = jobDatum.jobId;
                  userDatum.orgId = jobDatum.orgId;
                  userDatum.postId = jobDatum.postId;
                  userData.push(userDatum);
                  console.log('  >> user.orgId: %s, user.realName: %s', userDatum.orgId, userDatum.realName);
                }
              }
            });
          });
        });
      })
    });

  });

  setTimeout(function(){
    writeJobFile(JSON.stringify(jobData));
  }, 2000);

  setTimeout(function(){
    writeUserFile(JSON.stringify(userData));
  }, 3000);

  setTimeout(function(){
    importJobFile();
    importWorkerFile();
  }, 6000);

}

function writeJobFile (data) {
  fs.writeFile('./job.json', data, (err) => {
    if (err) throw err;
    console.log('job.json is saved!');
  });
}

function writeUserFile (data) {
  fs.writeFile('./user.json', data, (err) => {
    if (err) throw err;
    console.log('user.json is saved!');
  });
}

function importJobFile () {
  var jobModel = require('./models/job');
  let jobQ = jobModel.remove({});
  jobQ.exec();

  let data = fs.readFile('./job.json', function(err, data){
    jobModel.create(JSON.parse(data.toString()), function(err) {
      console.log('initial jobModel is OK');
    });
  });
}

function importWorkerFile () {
  var userModel = require('./models/user');
  let userQ = userModel.remove({});
  userQ.exec();

  let data = fs.readFile('./user.json', function(err, data){
    userModel.create(JSON.parse(data.toString()), function(err) {
      console.log('initial userModel is OK');
      mongoose.disconnect();
    });
  });
}
