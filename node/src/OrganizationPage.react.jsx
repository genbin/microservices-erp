import React from 'react';

import { createStore,bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Row, Col } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

import { getTreeData } from './actions/organization';

import HrTree from './components/organization/HrTree.react';

import JobUserPanel from './components/organization/JobUserPanel.react';
import RolesTable from './components/organization/RolesTable.react';

class BodyContent extends React.Component {
  constructor (props) {
    super(props);
    const {dispatch} = this.props;
    dispatch(getTreeData());
  }

  render() {
      const {tree, users, jobs} = this.props;

      return (
        <div>
          <Row>
            <Col span="4">
              <HrTree tree={ tree }/>
            </Col>
            <Col span="20">
              <div style={{ padding: '0 24px', minHeight: 280 }}>
                <JobUserPanel users={users} jobs={jobs}/>
                <RolesTable />
              </div>
            </Col>
          </Row>
        </div>
    );
  }
}

function mapStateToProps(state)  {
  return {
    tree: state.organization.tree || [],
    users: state.organization.users || [],
    jobs: state.organization.jobs || []
  };
}

module.exports = connect(mapStateToProps)(BodyContent);