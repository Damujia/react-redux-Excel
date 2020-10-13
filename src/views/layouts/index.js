import React from 'react'
import { Layout } from 'antd'
import { Route, Switch } from 'react-router-dom'
import { routes } from '@/router/routes'
import { TransitionGroup, CSSTransition } from 'react-transition-group' // 过度
import './index.css'
import Sidmenu from './Sidmenu'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'

const { Header, Content } = Layout

class Index extends React.Component {
  state = {
    collapsed: false,
    menuSelected: this.props.history.location.pathname,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    // const menuSelected = this.props.history.location.pathname; // 当前页面的path
    // const menuOpened = `/${menuSelected.split('/')[1]}`;
    // const type = this.props.theme.type;
    return (
      <Layout className="lay_height">
        <Sidmenu tog={this.state.collapsed} />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: this.toggle,
              }
            )}
          </Header>
          <TransitionGroup>
            <CSSTransition classNames="fade" timeout={500}>
              <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24
                }}
              >
                <Switch>
                  {routes.map((e) => (
                    <Route
                      render={() => <e.component />}
                      key={e.path}
                      path={e.path}
                    />
                  ))}
                </Switch>
              </Content>
            </CSSTransition>
          </TransitionGroup>
        </Layout>
      </Layout>
    )
  }
}
export default Index
