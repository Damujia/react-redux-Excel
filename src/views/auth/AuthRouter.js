import React from 'react';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';

// 路由重定向，未登录就跳转到登录页面
const AuthRouter = ({ component: Component, ...rest }) => {
	const isLogged =  JSON.parse(sessionStorage.getItem('userName'));
	return <Route {...rest} render={props => (isLogged ? <Component {...props} /> : <Redirect to={'/login'} />)} />;
};

export default withRouter(AuthRouter);
