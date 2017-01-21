import React from 'react';
import _ from 'lodash';

import { Modal, Button, Icon, Form, Input, DatePicker, Row, Col } from 'antd';
const FormItem = Form.Item;

import { getUserFromPage, saveUserDataByUserId } from '../../actions/organization';

const UserForm = Form.create()(
  (props) => {
    const { user, visible, onCancel, onSubmit, form, dispatch } = props;
    const { getFieldDecorator } = form;
    console.log('UserForm: %o', user);
    return (
        <Modal
          width = {600}
          user={user}
          visible = { visible }
          onCancel = { onCancel }
          onOk={ onSubmit }
          title = "用户信息"
          dispatch={dispatch}
        >
          <Form>
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
                  {getFieldDecorator('postId', {
                    rules: [{ required: true, message: '岗位名不能为空' }],
                  })(
                    <Input />
                  )}
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

            <Row>
              <Col span="24">
                <FormItem
                  label = "备注" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} >
                  {getFieldDecorator('remark', {
                    rules: [{ required: false, message: '' }],
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>
            </Row>

          </Form >
        </Modal>
    );
  });

const UserDialog = React.createClass({
  getInitialState() {
    console.log('UserDialog getInitialState %o', this.props.user, this.props.users);
    return {
      user: this.props.user,
      visible: false
    };
  },
  showModal() {
    this.setState({ visible: true });
    const form = this.form;
    const { user } = this.props;
    form.setFieldsValue({
      realName: user.realName,
      loginName: user.loginName,
      postId: user.postId,
      mobile: user.mobile,
      remark: user.remark
    });
  },
  onCancel() {
    this.setState({ visible: false });
  },
  onSubmit(e) {
    console.log('Received values of form');
    const { user, dispatch } = this.props;
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      dispatch(saveUserDataByUserId(Object.assign({}, user, values)));
      form.resetFields();
      this.setState({ visible: false });
    });

    // e.preventDefault();
    // const _this = this;
    // const { dispatch } = this.props;
    // let user = this.props.user,
    // newOne = {};
    //
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     newOne = Object.assign({}, user, values);
    //     dispatch(saveUserDataByUserId(newOne));
    //     _this.onCancel();
    //   }
    // });
  },
  saveFormRef(form) {
    this.form = form;
  },
  render() {
    const { dispatch, user } = this.props;
    return <UserForm
            ref={this.saveFormRef}
            user={user}
            visible={this.state.visible}
            onCancel={this.onCancel}
            onSubmit={this.onSubmit}
            dispatch={dispatch}
          />
  }
});

module.exports = UserDialog;
