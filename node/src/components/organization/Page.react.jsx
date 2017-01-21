import React from 'react';
import { createStore,bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Layout, Menu, Breadcrumb, Icon, Row, Col } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

import OrgTree from './OrgTree.react';
import JobUserPanel from './JobUserPanel.react';
import { getTreeData } from '../../actions/organization';

class BodyContent extends React.Component {
  constructor (props) {
    super(props);
    const {dispatch} = this.props;
    dispatch(getTreeData());
  }

  render() {
      const {tree, users, jobs, workers } = this.props;
      const {dispatch} = this.props;

      return (
        <div>
          <Row>
            <Col span="4">
              <OrgTree tree={ tree }/>
            </Col>
            <Col span="20">
              <div style={{ padding: '0 24px', minHeight: 280 }}>
                <JobUserPanel
                  users={users}
                  jobs={jobs}
                  workers={workers}
                  dispatch={dispatch}
                />
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
    jobs: state.organization.jobs || [],
    workers: state.organization.workers || [],
  };
}

module.exports = connect(mapStateToProps)(BodyContent);
