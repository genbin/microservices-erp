import React from 'react';
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
      loading: false,
      visible: false,
    };
  },
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
    return ( <div >
      <Modal 
        width = {600}
        okText = "保存"
        okCancel = "取消"
        visible = {
          this.state.visible
        }
        title = "用户信息"
        onOk = {
          this.handleOk
        }
        onCancel = {
          this.handleCancel
        }
      >
        <Form>
          <FormItem 
            label = "用户名称" 
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
          > 
            <Input />
          </FormItem>   

          <FormItem 
            label = "用户登录名称" 
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
          > 
            <Input />
          </FormItem>   


          <Row type="flex">
            <Col span="12">
              <FormItem 
                label = "岗位" 
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
              > 
                <Input />
              </FormItem>   
            </Col>
            <Col span="12">
              <FormItem
                label = "手机" 
                labelCol = {{span: 4}}
                wrapperCol = {{span: 12}}
              >
                <Input />
              </FormItem>
            </Col>
          </Row>

          <FormItem 
            label = "备注" 
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
          > 
            <Input />
          </FormItem>   

        </Form > 
      </Modal> </div >
    );
  },
});

module.exports = WorkerModal;