import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import '../../css/Login.scss'

export default function ChangePassword() {
    const [username, setUsername] = useState()
    const [orgpassword, setOrgpassword] = useState()
    const [newpassword, setNewpassword] = useState()

    const handleSubmit = () => {
        // fetch('https://localhost:8088/editpassword', {
        //     method: "POST",
        //     data: {
        //         user: username,
        //         orgpass: orgpassword,
        //         newpass: newpassword
        //     }
        // }
        // )
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             if (result === 1) {
        //                 alert('Change successful')
        //             }
        //             else {
        //                 alert('Change attempt failed')
        //             }
        //         }
        //     )
        alert('Change successful')
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
