import React from 'react';

import { createStore,bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

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

      console.log('OrganizationPage.react: props: %o', tree, jobs);
      return (
        <Content style={{ padding: '0 50px' }}>

          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item >鑫云ERP系统</Breadcrumb.Item>
            <Breadcrumb.Item>组织管理权限</Breadcrumb.Item>
          </Breadcrumb>

          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <HrTree tree={tree}/>

            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <JobUserPanel users={users} jobs={jobs}/>
              <RolesTable />
            </Content>

          </Layout>

        </Content>
    );
  }
}

function mapStateToProps(state)  {
  console.log('>>>>>>>>>>>mapStateToProps: %o', state);
  return {
    tree: state.organization.tree?  state.organization.tree : [],
    users: state.organization.users?  state.organization.users : [],
    jobs: state.organization.jobs? state.organization.jobs : []
    // companies: state.companies?  state.companies : [],
  };
}

module.exports = connect(mapStateToProps)(BodyContent);