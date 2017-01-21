import React from 'react';
// import { createStore,bindActionCreators } from 'redux';
// import { Provider, connect } from 'react-redux';
import { Layout, Menu, Breadcrumb, Icon, Row, Col } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class BodyContent extends React.Component {
  constructor (props) {
    super(props);
    // const {dispatch} = this.props;
  }

  render() {
      return (
        <div className="page-test">
          <Row>
            <Col span="24">
              <div style={{ padding: '0 24px', minHeight: 280 }}>
                test
              </div>
            </Col>
          </Row>
        </div>
    );
  }
}

module.exports = BodyContent;
