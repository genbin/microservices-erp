import React from 'react';
import { createStore,bindActionCreators } from 'redux';
import { Provider ,connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd'

import { getJobDataByOrgId, getWorkerDataByOrgId } from '../../actions/organization'

const { SubMenu } = Menu;

const HrTree = React.createClass({
  getInitialState() {
    return {
      tree: this.props.tree || []
    }
  },

  onClickMenu(e) {
    const {dispatch} = this.props;
    dispatch(getJobDataByOrgId(e.key));
    dispatch(getWorkerDataByOrgId(e.key));
  },

  render() {
      console.log('HrTree: %o', this.props);
      let { tree } = this.props;
      console.log('组织树结构初始化：', tree);
      if (tree.length == 0) {
        return <ul/>
      }
      return (
          <Menu
            mode="inline"
            style={{ width: 240, padding: 0 0 0 30px }}
            defaultSelectedKeys={['root']}
            defaultOpenKeys={['root', 'org1', 'org2']} 
            onClick={this.onClickMenu}>

            <SubMenu key='root' title={<span><Icon type="home" />{tree[0].text}</span>}>
              {tree[0].org.map((one, g)=>{

                return (
                  <SubMenu key={'org'+g} title={<span><Icon type="home" />{one.text}</span>} >
                    {one.org.map((two) => {

                      return (
                        <SubMenu key={two._id} title={<span><Icon type="home" />{two.text}</span>}>
                          {two.org.map((three) => {

                            return (
                              <SubMenu key={three._id} title={<span><Icon type="user" />{three.text}</span>}>
                              {three.org.map((four) => {

                                return <Menu.Item key={four._id}>{four.text}</Menu.Item>

                              })}
                            </SubMenu>)
                          })}
                      </SubMenu>)
                    })}
                </SubMenu>)

              })}
            </SubMenu>
          </Menu>
    );
  }
});

module.exports = connect()(HrTree);