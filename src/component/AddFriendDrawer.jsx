import React, { useState } from 'react'
import { Input, Button, Form } from 'antd'

import localStorage from 'localStorage'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

export default function AddFriendDrawer() {
    const user = localStorage.getItem('user')
    const [targetUser, setTargetUser] = useState()

    const handleSubmit = () => {
        fetch('http://localhost:8088/friend/add',{
            method: "POST",
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    userName: targetUser
                }
            )
        })
        .then(res => res.json())
        .then(
            (result) => {
                if (result.status === 200){
                    alert(result.message)
                }
                else {
                    alert(result.message)
                }
            }
        )
    }

    return (
        <Form {...layout} name="add-info" >
            <Form.Item name={'user'} label="Target Username" >
                <Input onChange={(e) => setTargetUser(e.target.value)} />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}
