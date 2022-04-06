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
        // fetch('url',{
        //     method:'POST',
        //     data: {
        //         username: user,
        //         tUser: targetUser
        //     }
        // })
        // .then(res => res.json())
        // .then(
        //     (result) => {
        //         if (result === 1){
        //             alert('add succeed')
        //         }
        //         else {
        //             alert('add fail')
        //         }
        //     }
        // )
        alert('add succeed')
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
