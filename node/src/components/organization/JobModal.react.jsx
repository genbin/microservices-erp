import React from 'react';
<<<<<<< HEAD
import { _ } from 'underscore';

import { Modal, Button, Form, Input, DatePicker, Row, Col } from 'antd';
const FormItem = Form.Item;
=======
import {
  Modal,
  Button
} from 'antd';
>>>>>>> bbe48c3e461675372c84c00151dabb6115618b0f

const JobModal = React.createClass({
  getInitialState() {
    return {
<<<<<<< HEAD
      job: {},
=======
>>>>>>> bbe48c3e461675372c84c00151dabb6115618b0f
      loading: false,
      visible: false,
    };
  },
<<<<<<< HEAD

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
>>>>>>> bbe48c3e461675372c84c00151dabb6115618b0f
    setTimeout(() => {
      this.setState({
        loading: false,
        visible: false
      });
    }, 3000);
  },
<<<<<<< HEAD

  onCancel() {
=======
  handleCancel() {
>>>>>>> bbe48c3e461675372c84c00151dabb6115618b0f
    this.setState({
      visible: false
    });
  },

  render() {
<<<<<<< HEAD
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
=======
    return ( < div >
      < Modal visible = {
        this.state.visible
      }
      title = "岗位信息"
      onOk = {
        this.handleOk
      }
      onCancel = {
        this.handleCancel
      }
      footer = {
        [ < Button key = "back"
          type = "ghost"
          size = "large"
          onClick = {
            this.handleCancel
          } > Return < /Button>, < Button key = "submit"
          type = "primary"
          size = "large"
          loading = {
            this.state.loading
          }
          onClick = {
            this.handleOk
          } >
          Submit < /Button>,
        ]
      } >
      < p > Some contents... < /p> < p > Some contents... < /p> < p > Some contents... < /p> < p > Some contents... < /p> < p > Some contents... < /p> < /Modal> < /div>
>>>>>>> bbe48c3e461675372c84c00151dabb6115618b0f
    );
  },
});

<<<<<<< HEAD
module.exports = JobModal;
=======
module.exports = JobModal;
>>>>>>> bbe48c3e461675372c84c00151dabb6115618b0f
