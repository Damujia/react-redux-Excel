import React from 'react'
// import $axios from 'axios'
import './login.css'
// import api from '@/axios/api'
import { Form, Input, Button, Checkbox } from 'antd'

class Login extends React.Component {
  state = {
    formRef: React.createRef(),
  }
  // 登录判断验证码
  onFill = () => {
    let user = this.state.formRef.current.getFieldsValue() // 获取form组件的值
    if(user.username === 'admin' && user.password === 'admin'){
      sessionStorage.setItem('userName', JSON.stringify(user))
      this.props.history.push('/main')
    }
    // api.login({ workerNo: user.username, psw: user.password })
    // .then(res => {
    //   if(res.data.result){
    //     console.log('登录成功')
    //     sessionStorage.setItem('userName', JSON.stringify(user))
    //     this.props.history.push('/main') // 跳转到主页
    //   }
    // })
  }
  render() {
    // 登录组件
    const layout = { labelCol: { span: 4 }, wrapperCol: { span: 18 } }
    const tailLayout = {
      wrapperCol: {
        offset: 4,
        span: 16,
      },
    }
    const onFinish = (values) => {
      // console.log('Success', values)
    }
    const onFinishFailed = (errorInfo) => {
      // console.log('Failed', errorInfo)
    }
    return (
      <div className="login_sty">
        <div>
          {/* 登录表单 */}
          <Form
            ref={this.state.formRef}
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" onClick={this.onFill}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
export default Login
