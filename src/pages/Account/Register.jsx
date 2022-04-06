import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import '../../css/Login.scss'

export default function Register() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = () => {
        // fetch('https://localhost:8088/account', {
        //     method: "POST",
        //     data: {
        //         user: username,
        //         pass: password
        //     }              
        // })
        // .then(res => res.json())
        // .then(
        //     (result) => {
        //         if (result === 1) {
        //             alert('Register succeed')
        //         }
        //         else {
        //             alert('Account already exist')
        //         }
        //     }
        // )
        alert("Register succeed")
    }

    return (
        <div className="Main">
            <div className="pre">
                <h1>Simple Blog connect</h1>
                <p>Register page</p>
            </div>
            <div className="loginform">
                <Form>
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
                        <Button type='primary' onClick={handleSubmit}>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
