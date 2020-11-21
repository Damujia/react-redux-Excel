import React from 'react'
import { Layout, Row, Col } from 'antd'

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ImportOutlined,
} from '@ant-design/icons'
const { Header } = Layout
class Headerdemo extends React.Component {
  toggle = () => {
    this.props.toggle()
  };
  quitbtn = () => {
    this.props.history.push('/login')
    sessionStorage.removeItem('userName')
  }
  render() {
    return (
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <Row justify="space-between">
          <Col span={8}>
            {/* 创建一个react元素 */}
            {React.createElement(
              this.props.colloff ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: this.toggle,
              }
            )}
          </Col>
          <Col span={8}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <ImportOutlined className="trigger" onClick={this.quitbtn} />
            </div>
          </Col>
        </Row>
        
      </Header>
    )
  }
}
export default Headerdemo
