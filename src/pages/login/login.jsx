import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd';
import { FormInstance } from 'antd/lib/form';
import {UserOutlined,LockOutlined} from '@ant-design/icons'
import './login.less'
import logo from './images/logo.png'
const Item = Form.Item;
const layout = {
    //labelCol: { span: 7 },
    wrapperCol: {
        offset:0,
        span: 23 
    },
};
const tailLayout = {
    wrapperCol: {
      offset: 0,
      span: 23,
    },
};
export default class Login extends Component {
    formRef = React.createRef();
    handleSubmit = (event)=>{
        event.preventDefault();
        const form = this.formRef.current;
        const {username,password} = form.getFieldsValue(true);
        const error = form.getFieldsError();
        if(error.find(item=>item.errors.length>0)){
            return;
        }
        console.log(`username: ${username},password: ${password}`);
    }
    render() {
        return (
            <div className="login">
                <div className="login-header">
                    <img src={logo} alt="logo"></img>
                    <h1>react后台管理系统</h1>
                </div>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form {...layout} ref={this.formRef} onSubmitCapture={this.handleSubmit} >
                        <Item name="username" rules={[
                            {required:true,message:'请输入用户名'},
                            {min:4,message:'账号长度大于4位'},
                            {max:14,message:'账号长度小于14位'},
                            {pattern:/^[a-zA-Z0-9_]+$/,message:'用户名必须是数字、字母、下划线' },
                            {whitespace:true,message:'账号不能为空格'}
                            ]} >
                            <Input placeholder="账号" prefix={<UserOutlined style={{color:'rgba(0,0,0,0.25)'}} />}/>
                        </Item>
                        <Item name="password"  rules={[
                            {required:true,message:'请输入密码'},
                            {min:4,message:'密码长度大于4位'},
                            {max:14,message:'密码长度小于14位'},
                            {pattern:/^[a-zA-Z0-9_]+$/,message:'密码名必须是数字、字母、下划线' },
                            {whitespace:true,message:'密码不能为空格'}
                            ]} >
                            <Input.Password placeholder="密码" prefix={<LockOutlined style={{color:'rgba(0,0,0,0.25)'}} />} />
                        </Item>
                        <Item {...tailLayout}>
                            <Button className="login-button" type="primary" htmlType="submit" >登录</Button>
                        </Item>
                    </Form>                 
                </section>
            </div>
        )
    }
}
