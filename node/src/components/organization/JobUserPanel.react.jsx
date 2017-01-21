import React from 'react';
import _ from 'lodash';

import { Table, Tabs, Button, Switch } from 'antd';
const TabPane = Tabs.TabPane;
const ButtonGroup = Button.Group;

import JobModal from './JobModal.react';
import UserDialog from './UserDialog.react';
import RoleTable from './RoleTable.react';
import JobWorkerTable from './JobWorkerTable.react';
import UserRoleTable from './UserRoleTable.react';

import { getUserDataByJobId } from '../../actions/organization';

const JobUserPanel = React.createClass({
  getInitialState() {
    console.log('JobUserPanel, getInitialState: %o', this.props);
    return {
      selectedRowKeys: [],  // 用户表和岗位表选中的行key
      selectedRowUser: {},  // 用户表，选中的数据行对象
      selectedRowJob: {},   // 岗位表，选中的数据行对象
      activeAlias: 'USER'   // 默认选中的tab
    }
  },

  // 编辑按钮，根据标签的切换不同，弹出不同的对话框
  onClickEditOne() {
    let mode = this.state.activeAlias;
    switch(mode) {
      case 'USER':
        this.refs.UserDialog.showModal(this.state.selectedRowUser);
        break;
      case 'JOB':
        this.refs.JobModal.showModal(this.state.selectedRowJob);
        break;
      default:
        break;
    }
  },

  // 新增按钮，根据标签的切换不同，弹出不同的对话框
  onClickNewOne() {
    let mode = this.state.activeAlias;
    switch(mode) {
      case 'USER':
        this.refs.UserDialog.showModal({});
        break;
      case 'JOB':
        this.refs.JobModal.showModal({});
        break;
      default:
        break;
    }
  },

  // 切换标签时，需要改变下标签的别名
  onChangeTab(key) {
    this.setState({
      selectedRowKeys: [],
      activeAlias: key
    });
  },

  // 点击选取一行数据: 岗位(job)Table
  onChangeJobTable: function(selectedRowKeys) {
    // 从props.jobs中获得相应的数据
    let selectedRowJob = _.filter(this.props.jobs, function(job){
      return job.sort == selectedRowKeys;
    });
    this.setState({
      selectedRowKeys,
      selectedRowJob: selectedRowJob[0]
    });

    // 触发查询该岗位的user动作
    const {dispatch} = this.props;
    dispatch(getUserDataByJobId(selectedRowKeys[0]));
  },

  // 点击选取一行数据: 人员(user)Table
  onChangeUserTable: function(selectedRowKeys) {
    // 从props.users中获得相应的数据
    let selectedRowUser = _.filter(this.props.users, function(user){
      return user.sort == selectedRowKeys;
    });

    console.log('onChangeUserTable: %o', selectedRowUser);
    this.setState({
      selectedRowKeys,
      selectedRowUser: selectedRowUser[0]
    });
  },

  render() {
    const { jobs, users, workers, dispatch } = this.props;
    const { selectedRowKeys, selectedRowUser } = this.state;
    console.log('JobUserPanel render %o', selectedRowUser);
    return (
      <div>
        <Tabs
          type="card"
          defaultActiveKey="USER"
          onChange={this.onChangeTab}
          tabBarExtraContent={
            <ButtonGroup>
              <Button size="small" icon="export" disabled>导出</Button>
              <Button onClick={this.onClickNewOne} size="small" icon="plus-square-o">新增</Button>
              <Button size="small" icon="lock" disabled>禁用</Button>
              <Button onClick={this.onClickEditOne} size="small" icon="edit">编辑</Button>
              <Button size="small" icon="plus-square" disabled>添加兼职岗位</Button>
            </ButtonGroup>
          }>

          <TabPane tab="用户" key="USER">
            <UserRoleTable
              users={ users }
              selectedRowKeys={ selectedRowKeys }
              onChangeUserTable={ this.onChangeUserTable }
              />
          </TabPane>

          <TabPane tab="岗位" key="JOB" >
            <JobWorkerTable
              jobs={ jobs }
              workers={ workers }
              selectedRowKeys={ selectedRowKeys }
              onChangeJobTable={ this.onChangeJobTable }
              />
          </TabPane>
        </Tabs>

        <UserDialog ref="UserDialog" users={users} user={selectedRowUser} dispatch={dispatch} />
        <JobModal ref="JobModal"/>

      </div>
    )
  }
});

module.exports = JobUserPanel;
