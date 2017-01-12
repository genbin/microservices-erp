import React from 'react';
import {
  Modal,
  Button
} from 'antd';

const JobModal = React.createClass({
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
    );
  },
});

module.exports = JobModal;