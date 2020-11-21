import React from 'react'
import { Layout } from 'antd'
import Sidmenu from './Sidmenu'
import Headerdemo from './Headerdemo'
import Contentdemo from './Contentdemo'
import Breaddemo from './Breaddemo'
import Tags from './tags'

class Index extends React.Component {
  state = {
    collapsed: false,
    menuSelected: this.props.history.location.pathname,
    breadName: '',
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    // const menuOpened = `/${menuSelected.split('/')[1]}`;
    // const type = this.props.theme.type;
    return (
      <Layout className="lay_height">
        {/* 左侧导航栏 */}
        <Sidmenu tog={this.state.collapsed} />
        <Layout className="site-layout">
          {/* 头部 */}
          <Headerdemo
            colloff={this.state.collapsed}
            toggle={this.toggle}
            history={this.props.history}
          />
          {/* 页签 */}
          <Tags />
          {/* 面包屑 */}
          <Breaddemo pathName={this.state.menuSelected} />
          {/* 内容 */}
          <Contentdemo />
        </Layout>
      </Layout>
    )
  }
}
export default Index
