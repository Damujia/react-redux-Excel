import React from 'react'
import { Breadcrumb } from 'antd'
import { withRouter, Link } from 'react-router-dom'
import { menus } from '@/router/menus'
class Breaddemo extends React.Component {
  getmenums = (location, data) => {
    let arr1 = []
    let arr2 = []
    data.forEach((e) => {
      if (location === e.path) {
        arr1.push(e)
      }
      if (e.children && e.children.length > 0) {
        e.children.forEach((f) => {
          if (location === f.path) {
            arr2.push(f)
            arr1.push({
              path: e.path,
              title: e.title,
            })
          }
        })
      }
    })
    return [...arr1, ...arr2]
  }
  render() {
    const location = this.props.location.pathname
    const routes = this.getmenums(location, menus)
    const itemRender = (route, params, routes, paths) => {
      // 判断匹配当前路由的面包屑为<Link></Link>
      const last = routes.indexOf(route) === routes.length - 1
      return last ? (
        <Link to={route.path}>{route.title}</Link>
      ) : (
        <span>{route.title}</span>
      )
    }
    return (
      <div>
        <Breadcrumb itemRender={itemRender} routes={routes} />
      </div>
    )
  }
}
// 通过withRouter高阶组件访问历史对象的属性和最接近<Route>的匹配项，每当渲染时，withRouter都将会更新匹配，位置和历史属性传递给包装的组件
export default withRouter(Breaddemo)
