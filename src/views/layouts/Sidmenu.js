import React from 'react';
import {Layout, Menu} from 'antd';
import {menus} from '@/router/menus'
import {Link} from 'react-router-dom';
const {Sider} = Layout;
const { SubMenu } = Menu;

class Sidmenu extends React.Component{
  // state = {
  //   collapsed: false
  // }
  sidmenudata = data => {
    return data.map(e => {
      if(e.children){
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
            <Link to={e.path}>
            <span>
              {e.title}
            </span>
            </Link>
          </Menu.Item>
        )
      )
    });
  };

  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.tog}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {this.sidmenudata(menus)}
          </Menu>
        </Sider>
    )
  }
};
export default Sidmenu;