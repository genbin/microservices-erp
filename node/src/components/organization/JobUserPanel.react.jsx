import React from 'react';
import { Table, Tabs, Button } from 'antd';

import WorkerTable from './WorkerTable.react';

import JobModal from './JobModal.react';
import UserModal from './UserModal.react';

const TabPane = Tabs.TabPane;
const ButtonGroup = Button.Group;

const columnsJobs = [{
  title: '是否主岗',
  dataIndex: 'type',
}, {
  title: '序号',
  dataIndex: 'sort',
}, {
  title: '岗位名称',
  dataIndex: 'postName',
}, {
  title: '状态',
  dataIndex: 'status',
}];

const columnsUser = [
  {
    title: '', dataIndex: 'isChecked'
  }, {
    title: '序号', dataIndex: 'sort',
  }, {
    title: '用户名称', dataIndex: 'realName',
  }, {
    title: '用户登录名称', dataIndex: 'loginName',
  }, {
    title: '手机', dataIndex: 'mobile',
  }, {
    title: '状态', dataIndex: 'status',
  }, {
    title: '备注', dataIndex: 'remark', width: 100
}];

const JobUserPanel = React.createClass({
  getInitialState() {
    console.log(' ####>>>>> JobUserPanel.getInitialState', this.props);
    return {
      activeAlias: 'WORKER'
    }
  },

  // 编辑按钮，根据标签的切换不同，弹出不同的对话框
  onClickEditOne() {
    this.onClickNewOne();
  },

  // 新增按钮，根据标签的切换不同，弹出不同的对话框
  onClickNewOne() {
    let mode = this.state.activeAlias;
    switch(mode) {
      case 'WORKER':
        this.refs.UserModal.showModal();
        break;
      case 'JOB':
        this.refs.JobModal.showModal();
        break;
      default:
        break;
    }
  },

  // 切换标签时，需要改变下标签的别名
  onChangeTab(key) {
    this.setState({
      activeAlias: key == 1? 'WORKER' : 'JOB'
    });
  },

  render() {
    const { jobs, users } = this.props;
    console.log('>>>> jobs and users: ', jobs, users);
    return (
      <div>
        <Tabs 
          defaultActiveKey="2"
          onChange={this.onChangeTab}
          tabBarExtraContent={
            <ButtonGroup>
              <Button size="small" icon="export" disabled>导出</Button>
              <Button size="small" icon="plus-square-o" onClick={this.onClickNewOne}>新增</Button>
              <Button size="small" icon="lock" disabled>禁用</Button>
              <Button size="small" icon="edit" onClick={this.onClickEditOne}>编辑</Button>
              <Button size="small" icon="plus-square" disabled>添加兼职岗位</Button>
            </ButtonGroup>
          }>

          <TabPane tab="用户" key="1">
            <div>
              <Table columns={columnsUser} dataSource={users} size="small"/>
            </div>
          </TabPane>

          <TabPane tab="岗位" key="2" >
            <div>
              <Table columns={columnsJobs} dataSource={jobs} size="small"/>
            </div>
          </TabPane>
        </Tabs>

        <UserModal ref="UserModal"/>

        <JobModal ref="JobModal"/>
      </div>
    )
  }
});

module.exports = JobUserPanel;