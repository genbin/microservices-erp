import React from 'react';
import ReactDOM from 'react-dom';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

import { Row, Col } from 'antd';

<<<<<<< HEAD
var OrganizationPage = require('./components/organization/Page.react');
=======
var OrganizationPage = require('./OrganizationPage.react');
>>>>>>> bbe48c3e461675372c84c00151dabb6115618b0f

import {createStore} from 'redux';
import {store} from './configureStore';

import { Provider } from 'react-redux';
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Row type="flex" justify="start">
        <Col span="24">
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}>
              <Menu.Item key="1"><a href="/organization">组织用户权限</a></Menu.Item>
              <Menu.Item key="2"><a href="/workflow">工作流管理</a></Menu.Item>
              <Menu.Item key="3">系统设置</Menu.Item>
              <Menu.Item key="4">财务接口配置</Menu.Item>
              <Menu.Item key="5">基础设置</Menu.Item>
            </Menu>
          </Header>
        </Col>
      </Row>
      <Row>
        <Col span="24">
<<<<<<< HEAD
          <Breadcrumb style={{ margin: '12px 5px' }}>
=======
          <Breadcrumb style={{ margin: '12px 0' }}>
>>>>>>> bbe48c3e461675372c84c00151dabb6115618b0f
            <Breadcrumb.Item >鑫云ERP系统</Breadcrumb.Item>
            <Breadcrumb.Item>组织管理权限</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <OrganizationPage />  
        </Col>
      </Row>
    </div>
  </Provider>,
  document.getElementById('base-container'));