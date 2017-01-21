import React from 'react';
import { Table, Button, Switch } from 'antd';
import RoleTable from './RoleTable.react';

const UserRoleTable = React.createClass({
  render() {
    const { users, onChangeUserTable, selectedRowKeys } = this.props;
    return (
      <div>
        <Table
          rowSelection={{
            type: 'radio',
            selectedRowKeys,
            onChange: onChangeUserTable
          }}
          columns={
              [
                { title: '序号', dataIndex: 'sort' },
                { title: '用户名称', dataIndex: 'realName' },
                { title: '用户登录名称', dataIndex: 'loginName' },
                { title: '手机', dataIndex: 'mobile' },
                { title: '状态', dataIndex: 'status',
                  render: (text) => <Switch defaultChecked={text=='启用'} size="small"/>
                },
                { title: '备注',
                  dataIndex: 'remark',
                  width: 100,
                  render: (text) => text.substring(0,10) }
              ]
            }
            dataSource={users}
            size="small"
          />
        <RoleTable/>
      </div>
    );
  },
});

module.exports = UserRoleTable;
