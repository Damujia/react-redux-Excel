import React from 'react';
import { hot } from 'react-hot-loader/root'; // 热跟新
import Router from './router/index';
// const { Header, Content, Sider } = Layout;
class App extends React.Component {
  render () {
    return (
      <Router />
    )
  }
}
export default hot(App);