# 马赛克 #

还是保密吧

### 主要技术 ###

* NodeJS
* Redux
* MongoDB
* MockJS

_目前为Demo阶段，框架还在不断完善中，开发脚本只通过了mac测试。
有问题欢迎联系我： liugenbin@126.com_

### 开发准备 ###

``` shell
# 启动数据库，该shell中检测并启动了MySQL, Redis, Mongo
sh db_start.sh
```

_初始化前，确保装了Mongo_
``` shell
# 进行npm install, 并在Mongo中生成前端模拟数据
sh init.sh
```

### 如何开发 ###

``` shell
# 启动node服务
sh node_start.sh

# 启动服务端Babel编译器
sh babel_start.sh

# 启动服务端webpack-dev-server打包服务器
sh bundle_start.sh
```

### 如何启动项目 ###

_开发环境下：_
浏览器直接输入地址：http://127.0.0.1:1337/organization/


### 代码说明 ###
``` 
# node启动入口
bin 
# node路由, 
routes
├── api
│   ├── jobs.js
│   ├── orgs.js
│   ├── userByPostId.js
│   └── users.js
├── organization
│   └── index.js
└── workflow
    └── index.js
static
views
# 基于redux框架的组件，编译后会进入lib目录
src/
├── actions
│   └── organization.js
├── components
│   └── organization
│       ├── HrTree.react.jsx
│       ├── JobModal.react.jsx
│       ├── JobUserPanel.react.jsx
│       ├── Page.react.jsx
│       ├── RolesTable.react.jsx
│       └── UserDialog.react.jsx
├── configureStore.js
├── index.jsx
└── reducers
    ├── index.js
    └── organization.js
# webpack, npm配置
webpack.config.js
package.json
# node 配置和启动文件
settings.js
server.js
```