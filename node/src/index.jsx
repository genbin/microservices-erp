import React from 'react';
import ReactDOM from 'react-dom';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

var HrTree = require('./common/HrTree.react');
var OrganizationPage = require('./OrganizationPage.react');

import {createStore} from 'redux';
import {store} from './configureStore';

import { Provider } from 'react-redux';
ReactDOM.render(
  <Provider store={store}>
    <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}>
            <Menu.Item key="1">组织用户权限</Menu.Item>
            <Menu.Item key="2">工作流管理</Menu.Item>
            <Menu.Item key="3">系统设置</Menu.Item>
            <Menu.Item key="4">财务接口配置</Menu.Item>
            <Menu.Item key="5">基础设置</Menu.Item>
          </Menu>
        </Header>
        <OrganizationPage />
        <Footer style={{ textAlign: 'center' }}>
          鑫云ERP系统 DEMO
        </Footer>
    </Layout> 
  </Provider>,
  document.getElementById('base-container'));