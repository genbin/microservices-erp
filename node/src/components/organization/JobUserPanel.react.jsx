import React from 'react';
import { _ } from 'underscore';

import { Table, Tabs, Button } from 'antd';
const TabPane = Tabs.TabPane;
const ButtonGroup = Button.Group;

import JobModal from './JobModal.react';
import UserModal from './UserModal.react';
import RolesTable from './RolesTable.react';

import { getUserDataByJobId } from '../../actions/organization';

const JobUserPanel = React.createClass({
  getInitialState() {
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
        this.refs.UserModal.showModal(this.state.selectedRowUser);
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
        this.refs.UserModal.showModal({});
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

  // 点击job岗位表格单行，获取相关的行数据
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

  // 点击用户表格单行，获取相关的行数据
  onChangeUserTable: function(selectedRowKeys) {
    // 从props.users中获得相应的数据
    let selectedRowUser = _.filter(this.props.users, function(user){
      return user.sort == selectedRowKeys;
    });

    this.setState({
      selectedRowKeys,
      selectedRowUser: selectedRowUser[0]
    });

  },

  render() {
    const { jobs, users, workers } = this.props;
    const { selectedRowKeys } = this.state;
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
            <div>
              <Table
                rowSelection={{
                  type: 'radio',
                  selectedRowKeys,
                  onChange: this.onChangeUserTable
                }}
                columns={
                    [
                      { title: '序号', dataIndex: 'sort' },
                      { title: '用户名称', dataIndex: 'realName' },
                      { title: '用户登录名称', dataIndex: 'loginName' },
                      { title: '手机', dataIndex: 'mobile' },
                      { title: '状态', dataIndex: 'status' },
                      { title: '备注',
                        dataIndex: 'remark',
                        width: 100,
                        render: (text)=> <a>{ text.substring(0,10) }</a> }
                    ]
                  }
                  dataSource={users}
                  size="small"
                />
            </div>
          </TabPane>

          <TabPane tab="岗位" key="JOB" >
            <div>
              <Table
                rowSelection={{
                  type: 'radio',
                  selectedRowKeys,
                  onChange: this.onChangeJobTable}}
                columns={
                  [
                    { title: '是否主岗', dataIndex: 'type' },
                    { title: '序号', dataIndex: 'sort' },
                    { title: '岗位名称', dataIndex: 'postName' },
                    { title: '状态', dataIndex: 'status' }
                  ]
                }
                dataSource={jobs}
                size="small"
              />
            <RolesTable workers={workers}/>
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
