import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import '../../css/Login.scss'

export default function ChangePassword() {
    const [username, setUsername] = useState()
    const [orgpassword, setOrgpassword] = useState()
    const [newpassword, setNewpassword] = useState()

    const handleSubmit = () => {
        fetch('http://localhost:8088/password/edit', {
            method: "POST",
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    userName: username,
                    originalPassword: orgpassword,
                    password: newpassword
                }
            )
        }
        )
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.status === 200) {
                        alert(result.message)
                    }
                    else {
                        alert(result.message)
                    }
                }
            )
    }

    return (
        <div className="Main">
            <div className="pre">
                <h1>Simple Blog connect</h1>
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
                            placeholder="Orginal Password"
                            onChange={(e) => setOrgpassword(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        name="repassword"
                        rules={[{ required: true, message: 'Please recheck your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="New Password"
                            onChange={(e) => setNewpassword(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" className='changepassword-form-button' onClick={handleSubmit}>
                            submit
                        </Button>
                    </Form.Item>
                </Form>

            </div>

        </div>

    )
}
