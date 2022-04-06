import React, { useState } from 'react'
import { Input, Button, Form } from 'antd'

import localStorage from 'localStorage';
import UploadFile from './UploadFile';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export default function ProfileInfoEdit() {
  const user = localStorage.getItem('user')
  const [editEmail, setEditEmail] = useState()
  const [editGender, setEditGender] = useState()
  const [editIntro, setEditIntro] = useState()

  const handleSubmit = () => {
    // fetch('url', {
    //   method: "POST",
    //   data: {
    //     username: user,
    //     email: editEmail,
    //     gender: editGender,
    //     intro: editIntro
    //   }
    // })
    // .then(res => res.json())
    // .then(
    //   (result) => {
    //     if (result === 1) {
    //       alert('change succeed')
    //     }
    //     else {
    //       alert('change fail')
    //     }
    //   }
    // )
    alert('change successful')
  }

  return (
    <Form {...layout} name="nest-messages" >
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input onChange={(e) => setEditEmail(e.target.value)}/>
      </Form.Item>
      <Form.Item name={['user', 'gender']} label="Gender" >
        <Input onChange={(e) => setEditGender(e.target.value)}/>
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea onChange={(e) => setEditIntro(e.target.value)}/>
      </Form.Item>
      <Form.Item label="new Avatar">
        <UploadFile limit={1}/>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
