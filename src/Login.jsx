import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Input, Button, Form, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import localStorage from "localStorage";

import './css/Login.scss'

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navi = useNavigate()

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    //读取来自后端URL的数据
    // 检验账号密码是否正确
    //账号密码一致则跳转至dashboard(finished)
    function Checkinfo() {

        //带参数POST请求(axios 和 fetch)
        // axios({
        //     method: "post",
        //     url: "url",
        //     data: {
        //         参数名: 参数值
        //     }
        // }).then(res => {

        // }).catch(err => {

        // })

        fetch(" ./userinfo.json", {
            method: "POST",
            // data : {
            //     username: ,
            //     password
            // }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.userinfo[0])
                }
            )
            .catch(
                console.log(0)
            )

        {
            if ((username === "Alpha") && (password === "123456")) {
                console.log(1)
                localStorage.setItem("user", username)
                navi('/dashboard/message', {

                })
            }
            else {
                console.log(0)
                alert("Username or password is not correct")
            }
        }
    }

    function sendInfo() {
        fetch('./', {
            method: 'POST',
            data: {
                RUname: username,
                RPword: password
            }

        })
    }

    //表单主体
    return (
        <div className="Main">
            <div className="pre">
                <h1>Simple Blog connect</h1>
                <p>Login page</p>
            </div>
            <div className="loginform">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={Checkinfo}>
                            Log in
                        </Button>
                        Or <a onClick={sendInfo}>register now!</a>
                    </Form.Item>
                </Form>
            </div>
        </div>

    )
}