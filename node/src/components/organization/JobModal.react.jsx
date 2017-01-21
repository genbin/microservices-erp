import React from 'react';
import _ from 'lodash';

import { Modal, Button, Form, Input, DatePicker, Row, Col } from 'antd';
const FormItem = Form.Item;

const JobModal = React.createClass({
  getInitialState() {
    return {
      job: {},
      loading: false,
      visible: false,
    };
  },

  showModal(data) {
    let job = {};
    if ( _.isEmpty(data)) {
      // 新增数据
      job = {
        postName:  '',
        postId: '',
        mobile: '',
        remark: ''
      };
    } else {
      // 修改数据
      job = data;
    }

    this.setState({
      job,
      visible: true,
    });
  },

  onOK() {
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

  onCancel() {
    this.setState({
      visible: false
    });
  },

  render() {
    if (this.state.job == {}) return <div/>

    return (
      <div> <Modal
        width = {600} okText = "保存" okCancel = "取消" visible = { this.state.visible }
        title = "岗位信息"
        onOk = { this.onOK }
        onCancel = { this.onCancel } >
        <Form>
          <FormItem label = "岗位名称" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} >
            <Input value={this.state.job.postName}/>
          </FormItem>

          <Row type="flex">
            <Col span="12">
              <FormItem label = "直属领导" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                <Input value={this.state.job.postId}/>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label = "手机" labelCol = {{span: 4}} wrapperCol = {{span: 12}} >
                <Input value={this.state.job.mobile}/>
              </FormItem>
            </Col>
          </Row>

          <FormItem
            label = "备注" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} >
            <Input value={this.state.job.remark}/>
          </FormItem>

        </Form >
      </Modal> </div >
    );
  },
});

module.exports = JobModal;
