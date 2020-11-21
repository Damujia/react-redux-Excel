import React from 'react';
import { hot } from 'react-hot-loader/root'; // 热跟新
import { Provider } from 'react-redux'
import Router from './router/index';
import store from './redux/store'
import './assets/css/app.css'
import './assets/css/index.css'
// const { Header, Content, Sider } = Layout;
class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}
export default hot(App);