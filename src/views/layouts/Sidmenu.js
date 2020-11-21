import React from 'react';
import { connect } from 'react-redux'
import { Layout, Menu } from 'antd';
import { menus } from '@/router/menus'
import { Link, withRouter } from 'react-router-dom';
import { routes } from '@/router/routes'
import { addTag } from '@/redux/actions/tagList'
const { Sider } = Layout;
const { SubMenu } = Menu;

class Sidmenu extends React.Component {
  state = {
    menuSelect: this.props.history.location.pathname
  }
  handClickTag (val) {
    const { path, title } = val
    routes.forEach(e => {
      if (e.path === path) {
        let obj = { path, title, component: e.component }
        this.props.addTag(obj)
      }
    })
  };


  sidmenudata = data => {
    return data.map(e => {
      if (e.children) {
        return (
          (
            <SubMenu key={e.path} title={e.title}>
              {this.sidmenudata(e.children)}
            </SubMenu>
          )
        )
      }
      return (
        (
          <Menu.Item key={e.path}>
            <Link to={e.path} onClick={() => this.handClickTag(e)}>
              <span>
                {e.title}
              </span>
            </Link>
          </Menu.Item>
        )
      )
    });
  };

  render () {
    const menuSelect = this.props.history.location.pathname
    console.log(this.props)
    let menuOpened = `/${menuSelect.split('/')[1]}`;
    return (
      <Sider trigger={null} collapsible collapsed={this.props.tog}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultOpenKeys={[menuOpened]} defaultSelectedKeys={[menuSelect]} selectedKeys={[menuSelect]}>
          {this.sidmenudata(menus)}
        </Menu>
      </Sider>
    )
  }
};
const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  addTag: data => {
    dispatch(addTag(data))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Sidmenu));