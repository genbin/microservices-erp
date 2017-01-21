import React from 'react';
import { createStore,bindActionCreators } from 'redux';
import { Provider ,connect } from 'react-redux';

import { Layout, Tree, Icon } from 'antd'
const TreeNode = Tree.TreeNode;

import { getJobDataByOrgId, getUserDataByOrgId } from '../../actions/organization'

const OrgTree = React.createClass({
  getInitialState() {
    return {
      selectedKeys: [],
      tree: this.props.tree || []
    }
  },

  onClickMenu(e) {
    const {dispatch} = this.props;
    dispatch(getJobDataByOrgId(e.key));
    dispatch(getUserDataByOrgId(e.key));
  },

  onClickTreeNode(selectedKeys, e) {
    const orgId = e.node.props.orgId || 0;
    const text = selectedKeys[0];
    console.log('  >>> tree node is clicked, text is %s, orgId is %s', text, orgId );
    const {dispatch} = this.props;
    dispatch(getJobDataByOrgId(orgId));
    dispatch(getUserDataByOrgId(orgId));
  },

  render() {
    let _this = this;
    let { tree } = this.props;
    if (tree.length == 0) return <ul/>
    const loop = tree => tree.map((item) => {
      if (item.children && item.children.length) {
        return <TreeNode
          key={item.key}
          orgId={item.orgId}
          title={item.key}
          onSelect={_this.onClickTreeNode} >
            {loop(item.children)}
          </TreeNode>;
      }
      return (
        <TreeNode
          key={item.key}
          title={item.key}
          orgId={item.orgId}
          onSelect={_this.onClickTreeNode}
        />);
    });
    return (
      <Tree
        defaultExpandedKeys={this.state.expandedKeys}
        onSelect={_this.onClickTreeNode}>
        {loop(tree)}
      </Tree>
    );
  }
});

module.exports = connect()(OrgTree);
