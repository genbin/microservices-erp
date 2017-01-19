import React from 'react';
<<<<<<< HEAD
import { Table, Button, Switch } from 'antd';

const RolesTable = React.createClass({
  getInitialState() {
    return {};
  },
  render() {
    return (
      <div>
        <Table
          columns={
              [
                { title: '', dataIndex: 'isChecked' },
                { title: '序号', dataIndex: 'sort' },
                { title: '用户名称', dataIndex: 'userName' },
                { title: '用户登录名称', dataIndex: 'loginName' },
                { title: '手机', dataIndex: 'mobile' },
                { title: '状态',
                  dataIndex: 'status',
                  render: (text) => <Switch defaultChecked={false} size="small"/>
                },
                { title: '备注',
                  dataIndex: 'remark',
                  width: 100,
                  render: (text) => <a>{text.substring(0, 10)}</a>
                },
              ]
            }
            dataSource={this.props.workers}
            size="small"
            title={() => '用户（集团招采专员（标准角色））'}
=======
import { Table, Button } from 'antd';

const columns = [{
  title: '',
  dataIndex: 'isChecked',
}, {
  title: '序号',
  dataIndex: 'sort',
}, {
  title: '用户名称',
  dataIndex: 'userName',
}, {
  title: '用户登录名称',
  dataIndex: 'loginName',
}, {
  title: '手机',
  dataIndex: 'mobile',
}, {
  title: '状态',
  dataIndex: 'status',
}, {
  title: '备注',
  dataIndex: 'remark',
}];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    isChecked: '',
    userName: `Edward King ${i}`,
    loginName: `登陆名测试 ${i}`,
    mobile: `134000022 ${i}`,
    status: 'online',
    remark: ''
  });
}

const RolesTable = React.createClass({
  getInitialState() {
    return {
      selectedRowKeys: [],  // Check here to configure the default column
      loading: false,
    };
  },
  start() {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  },
  onSelectChange(selectedRowKeys) {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  },
  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <Table rowSelection={rowSelection} 
          columns={columns} dataSource={data} size="small"
          title={() => '用户（集团招采专员（标准角色））'}
>>>>>>> bbe48c3e461675372c84c00151dabb6115618b0f
        />
      </div>
    );
  },
});

<<<<<<< HEAD
module.exports = RolesTable;
=======
module.exports = RolesTable;
>>>>>>> bbe48c3e461675372c84c00151dabb6115618b0f
