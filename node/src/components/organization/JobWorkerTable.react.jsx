import React from 'react';
import { Table, Button, Switch } from 'antd';
import WorkerTable from './WorkerTable.react';

const JobWorkerTable = React.createClass({
  render() {
    const { jobs, workers, onChangeJobTable, selectedRowKeys } = this.props;
    return (
      <div>
        <Table
          rowSelection={{
            type: 'radio',
            selectedRowKeys,
            onChange: onChangeJobTable}}
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
      <WorkerTable workers={workers}/>
      </div>
    );
  },
});

module.exports = JobWorkerTable;
