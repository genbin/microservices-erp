import React from 'react';
<<<<<<< HEAD
import { _ } from 'underscore';

import { Modal, Button, Icon, Form, Input, DatePicker, Row, Col } from 'antd';
const FormItem = Form.Item;

import { getUserFromPage } from '../../actions/organization';

const UserForm = Form.create()(React.createClass({
  getInitialState: function(){
    return {
      user: this.props.user
    }
  },
  componentDidMount() {
    this.props.form.setFieldsValue({
      realName: "test",
    });
  },
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  },
  /*
      <Form inline onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">Log in</Button>
        </FormItem>
      </Form>
  */
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem label = "用户名称" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} >
          {getFieldDecorator('realName', {
            rules: [{ required: true, message: '用户名不能为空' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="请输入用户名" />
          )}
        </FormItem>

        <FormItem label = "用户登录名称" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} >
          {getFieldDecorator('loginName', {
            rules: [{required: true, message: '登录名不能为空'}]
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="字母，数字，下划线"/>
          )}
        </FormItem>

        <Row type="flex">
          <Col span="12">
            <FormItem label = "岗位" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
              <Input defaultValue={this.state.user.postId}/>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label = "手机" labelCol = {{span: 4}} wrapperCol = {{span: 12}} >
              {getFieldDecorator('mobile', {
                rules: [
                  {pattern: /^1(3[3]|4[9]|53|7[037]|8[019])\d{8}$/, message: '请输入有效的手机号'},
                  {required: true, message: '手机号不能为空'}
                ]
              })(
                <Input addonBefore={<Icon type="mobile" />} placeholder="13位数字"/>
              )}
            </FormItem>
          </Col>
        </Row>

        <FormItem
          label = "备注" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} >
          <Input defaultValue={this.state.user.remark}/>
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit">保存</Button>
        </FormItem>
      </Form >
    );
  },
}));

const UserModal = React.createClass({
  getInitialState() {
    return {
      user: {},
=======
import {
  Modal,
  Button,
  Form,
  Input,
  DatePicker,
  Row,
  Col
} from 'antd';
const FormItem = Form.Item;

const WorkerModal = React.createClass({
  getInitialState() {
    return {
>>>>>>> bbe48c3e461675372c84c00151dabb6115618b0f
      loading: false,
      visible: false,
    };
  },
<<<<<<< HEAD

  showModal(data) {
    let user = {};
    if ( _.isEmpty(data)) {
      // 新增数据
      user = {
        realName:  '',
        loginName: '',
        postId: '',
        mobile: '',
        remark: ''
      };
    } else {
      // 修改数据
      user = data;
    }

    this.setState({
      user,
      visible: true,
    });
  },

  onCancel() {
    this.setState({
      visible: false
    });
  },

  onSubmitUser(e) {
     e.preventDefault();
     this.props.form.validateFieldsAndScroll((err, values) => {
       if (!err) {
         console.log('Received values of form: ', values);
       }
     });
  },

  render() {
    if (this.state.user == {}) return <div/>
    return (
      <div>
        <Modal
          width = {600}
          visible = { this.state.visible }
          onCancel = { this.onCancel }
          title = "用户信息"
          footer = {[]}
        >
          <UserForm user={this.state.user}/>
        </Modal>
      </div >
=======
  showModal() {
    this.setState({
      visible: true,
    });
  },
  handleOk() {
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({
        loading: false,
        visible: false
      });
    }, 3000);
  },
  handleCancel() {
    this.setState({
      visible: false
    });
  },

  render() {
    return ( <div> <Modal 
        width = {600}
        okText = "保存"
        okCancel = "取消"
        visible = { this.state.visible }
        title = "用户信息"
        onOk = { this.handleOk }
        onCancel = { this.handleCancel }
      >
        <Form>
          <FormItem label = "用户名称" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} > 
            <Input />
          </FormItem>   

          <FormItem label = "用户登录名称" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} > 
            <Input />
          </FormItem>   


          <Row type="flex">
            <Col span="12">
              <FormItem label = "岗位" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} > 
                <Input />
              </FormItem>   
            </Col>
            <Col span="12">
              <FormItem label = "手机" labelCol = {{span: 4}} wrapperCol = {{span: 12}} >
                <Input />
              </FormItem>
            </Col>
          </Row>

          <FormItem 
            label = "备注" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} > 
            <Input />
          </FormItem>   

        </Form > 
      </Modal> </div >
>>>>>>> bbe48c3e461675372c84c00151dabb6115618b0f
    );
  },
});

<<<<<<< HEAD
module.exports = UserModal;
=======
module.exports = WorkerModal;
>>>>>>> bbe48c3e461675372c84c00151dabb6115618b0f
