import React from 'react';
import { Table, Button, Switch } from 'antd';

const RoleTable = React.createClass({
  getInitialState() {
    return {};
  },
  render() {
    const { roles } = this.props;
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
            dataSource={roles}
            size="small"
            title={() => '对应岗位'}
        />
      </div>
    );
  },
});

module.exports = RoleTable;
